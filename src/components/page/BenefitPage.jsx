import { useState, useEffect } from 'react'
import JsonData from '../../data/benefit_data.json'

const BenefitPage = () => {
	const [benefitPageData, setBenefitPageData] = useState({})
	useEffect(() => {
		setBenefitPageData(JsonData)
		console.log(JsonData);	
	}, [])

	return (
		<div>
			{ benefitPageData && benefitPageData[0].name }
		</div>
	);
}

export default BenefitPage;