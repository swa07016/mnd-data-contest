import { useState, useEffect } from 'react'
import { Navigation } from '../navigation'
import BenefitTableRow from '../BenefitTableRow'

const locationList = [
	'선택',
	'서울',
	'경기',
	'강원',
	'충북',
	'충남',
	'전북',
	'전남',
	'경북',
	'경남',
	'제주',
	'부산',
	'대구',
	'인천',
	'광주',
	'대전',
	'울산',
	'전국',
]

const typeList = [
	'선택',
	'연중객실할인',
	'이용할인',
	'스키시즌권',
	'리프트권',
	'스키장비대여할인',
	'골프',
]

const BenefitPage = () => {
	const [benefitPageData, setBenefitPageData] = useState([])
	const [filteredData, setFilteredData] = useState([])
	const [selectLocation, setSelectLocation] = useState('선택');
	const [selectType, setSelectType] = useState('선택');
	
	const setFilteredDatabySelect = () => {
		let tempList = [];
		
		if(selectLocation !== '선택' && selectType !== '선택') {
			for(let i=0; i<benefitPageData.length; i++) {
				const loca = benefitPageData[i].location;
				const ty = benefitPageData[i].type;

				if(loca.includes(selectLocation) && ty.includes(selectType)) {
					tempList.push(benefitPageData[i]);
				}
				
			}
			setFilteredData(tempList);
		} else setFilteredData([]);
		
		/*
		if(selectLocation === '선택' && selectType === '선택') {
			setFilteredData([]);
		} else if(selectLocation === '선택' && selectType !== '선택') {
			for(let i=0; i<benefitPageData.length; i++) {
					const ty = benefitPageData[i].type;
					if(ty.includes(selectType)) {
						tempList.push(benefitPageData[i]);
					}
				}

		} else if( selectLocation !== '선택' && selectType === '선택') {
			for(let i=0; i<benefitPageData.length; i++) {
					const loca = benefitPageData[i].location;
					if(loca.includes(selectLocation)) {
						tempList.push(benefitPageData[i]);
					}
				}

		} else {
			for(let i=0; i<benefitPageData.length; i++) {
				const loca = benefitPageData[i].location;
				const ty = benefitPageData[i].type;

				if(loca.includes(selectLocation) && ty.includes(selectType)) {
					tempList.push(benefitPageData[i]);
				}
			}
			setFilteredData(tempList);
		}
		*/
	}
	
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
		console.log(selectLocation, selectType);
		setFilteredDatabySelect();
	}, [selectType, selectLocation])
	
	
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Navigation/>
			<div style={{
					width: '100%',
					height: '400px',
					backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/04/15/06/13/beach-4128541_960_720.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					textAlign: 'center',
				}}>
				<div style={{
					height: '100%',
					display: 'inline-block',
					paddingTop: '200px',
					textAlign: 'center',
					fontWeight: '100',
					fontSize: '70px',
					color: 'rgb(59, 78, 50)'
					}}>병사할인혜택</div>
			</div>
			<div className="container" style={{
					paddingTop:'50px',
				}}>
				<div id="filter-wrap" style={{
						
					}}>
					
				</div>
				<div style={{ display: 'inline-block', padding: '10px', }}>
				<span style={{
						display: 'inline-block',
						marginRight: '10px',
						fontSize: '20px',
					}}>지역 : </span>
				<select className="form-select" onChange={(e)=>{setSelectLocation(e.target.value)}} value={selectLocation}
					style={{
						backgroundColor: 'white',
						fontSize: '20px',
						padding: '8px 5px',
						borderRadius: '10px',
						
					}}>
					{locationList.map(location => {
						return (
							<option value={location}>{location}</option>
						);
					})}	
				</select>
				</div>
				<div style={{ display: 'inline-block', padding: '10px',}}>
				<span style={{
						display: 'inline-block',
						marginRight: '10px',
						fontSize: '20px',

					}}>종류 : </span>
				<select className="form-select" onChange={(e)=>{setSelectType(e.target.value)}} value={selectType}
					style={{
						backgroundColor: 'white',
						fontSize: '20px',
						padding: '8px 5px',
						borderRadius: '10px',
						
					}}>
					{typeList.map(type => {
						return (
							<option value={type}>{type}</option>
						);
					})}	
				</select>
				</div>
				
				<hr style={{
						height: '1.25px',
						backgroundColor: '#e1e1e1',
						width: '100%',	
					}}/>
				<div style={{ overflow: 'auto', }}>
					<table className="table" style={{ minWidth: '500px', }}>
						<thead>
							<tr>
							  <th scope="col">번호</th>
							  <th scope="col">이름</th>
							  <th scope="col">종류</th>
							  <th scope="col">종료날짜</th>
							</tr>
						</thead>
						<tbody>
						{ filteredData.map( (data, index) => {
							return <BenefitTableRow
									   index={index}
									   key={data.name}
									   location={data.location}
									   name={data.name}
									   type={data.type}
									   start={data.start}
									   end={data.end}
									   tel={data.tel}
									   site={data.site}
									   detail={data.detail}
									   id={data.id}
									   />
						}) }
							
						</tbody>
					</table>
					{ filteredData.length === 0 && 
					<div style={{ textAlign: 'center', }}>
						검색된 데이터가 없습니다. 지역과 종류 모두 선택해보세요.
					</div>  }
				</div>
			</div>
		</div>
	);
}

export default BenefitPage;