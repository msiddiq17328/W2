module.exports = function (input) {

  let searchParams = input.query.input_params;
  if(!searchParams) {
    searchParams = "end";
  } else {
    searchParams = searchParams.filter(function(value){ 
        return value !== '' && value !== ' ';
      });
      if(searchParams.length === 0) {
        searchParams = "end";
      } else {
        searchParams = searchParams.toString();
      }
  }
  //order by the search result
  const sortingColumns = ['post_date','location','leave_type'];
  let orderBy = input.query.orderBy == null || input.query.orderBy == '' ? "post_date" : input.query.orderBy;
  orderBy = sortingColumns.includes(orderBy) ? orderBy : "post_date";

  //query to be used to fetch search results
  let queryToBeExecuted = null;
  let searching = '';
  if (searchParams && searchParams != '') {
    const myArray = searchParams.split(",");
    myArray.forEach((element,index) => {
      if(index > 0)
      {
        searching += " OR job_title like " + "'%" + element + "%'";
        if(index + 1 == myArray.length)
        {
          searching += " order by " + orderBy + " desc limit :limiter offset :offset"
        }
      } else {
        searching += "like " + "'%" + element + "%'";
        if(myArray.length == 1)
        {
          searching += " order by " + orderBy + " desc"
        }
      }
    }); 
    queryToBeExecuted = "select * from jobs where job_title " + searching;
  } else {
    queryToBeExecuted = `select * from jobs where job_title like '%%' limit :limiter offset :offset`;
  }
  return queryToBeExecuted;
}