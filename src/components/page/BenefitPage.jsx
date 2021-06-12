import { useState, useEffect } from 'react'

const BenefitPage = () => {
	const [benefitPageData, setBenefitPageData] = useState([])
	const getData=()=>{
		fetch('/data/benefit_data.json'
		,{
		  headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		}
		)
		  .then(function(response){
			return response.json();
		  })
		  .then(function(myJson) {
			setBenefitPageData(myJson);
		  });
  }
	
	
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			{ benefitPageData && benefitPageData.length >0 && benefitPageData[0].name }
		</div>
	);
}

export default BenefitPage;