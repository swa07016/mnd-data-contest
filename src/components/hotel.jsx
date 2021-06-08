export const Hotel = (props) => {
  return (
    <div id='hotel' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '0px',
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>호텔/콘도</h2>
		  <p style={{ color: 'rgb(151, 98, 65)', marginBottom:'60px', }}>
            국군복지단 복지시설(호텔, 콘도) 정보를 알아보세요!
          </p>
        </div>
        <div className='row'>
  			<div key='1' className='col-xs-12 col-md-4'>
     				
				<div className='card' style={{
						width:'100%',
							backgroundColor: 'white',
							borderRadius: '40px',
					}}>

					{/*
				  <img className='card-img-top' src='' alt='Card image cap'
					  style={{
							width: '100%',
						}}/>
						
						*/}
					<div className="cardContent" style={{
							padding: '10px',
						}}>
					<div style={{
							width: '100%', 
							height: '200px',
							backgroundImage: 'url(https://contents.hiltonhotels.jp/ko/h/kyohi/hotel_main_20200517222112_lg_sp.jpg)',
							backgroundSize: 'cover', 
							backgroundPosition: 'center',
							overflow: 'hidden',
							borderRadius:'40px',
						}}></div>
				  <div className='card-body'>
					<h5 className='card-title'>국방컨벤션</h5>
					<p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href='#' className='btn btn-primary'>Go somewhere</a>
					</div>
				  </div>
				</div>

				</div>			
        </div>
		  <a style={{
				  display: 'inline-block',
				  backgroundColor: 'rgb(151, 98, 65)',
				  fontSize: '20px',
				  padding: '13px 15px',
				  color: 'white',
			 	  borderRadius: '27px',
				  marginTop: '40px',
			  }} href="#">할인혜택 더보기</a>
      </div>
    </div>
  )
}
