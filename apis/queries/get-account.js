//get account
module.exports = (id) => {
	return ({
	query : `PREFIX : <urn:local:g0v:api:v1:>
PREFIX interval: <http://reference.data.gov.uk/def/intervals/>
PREFIX time: <http://www.w3.org/2006/time#>


SELECT ?code_history ?year ?amount
WHERE {
  	?account_record a :AccountRecord;
				:code ?code_history ;
				:year/time:hasBeginning/interval:ordinalYear ?year;
                :amount ?amount.
		
	FILTER (?code_history = "${id}") 
}`})
}