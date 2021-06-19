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
  			<div key='1' className='col-xs-12 col-md-4' style={{marginBottom:'35px',}}>
     				
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
							height: '250px',
							backgroundImage: 'url(https://contents.hiltonhotels.jp/ko/h/kyohi/hotel_main_20200517222112_lg_sp.jpg)',
							backgroundSize: 'cover', 
							backgroundPosition: 'center',
							overflow: 'hidden',
							borderRadius:'40px',
						}}></div>
				  <div className='card-body'>
					<h5 className='card-title' 
						style={{
							  fontSize: '23px',
							  marginTop: '25px',
							  color: 'black',
						  }}>국방컨벤션</h5>
					  	
					 <div style={{
							  width: '100%',
							  textAlign: 'left',
							  padding: '10px 20px',
						  }}>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-telephone-fill" viewBox="0 0 16 16">
						  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
						</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>02-748-0744</span>

						</div>
						 <div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>서울 용산구</span>
						  
						</div>
						
					  </div>
						<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-arrow-right-circle" viewBox="0 0 16 16"
							style={{
							  position: 'absolute',
						      right: '45px',
							  bottom: '25px',
						  }}>
						  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
						</svg>
					{/*
					 <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					 
					<a href='#' className='btn btn-primary'>Go somewhere</a>
					*/}
					</div>
				  </div>
				</div>

				</div>			
			<div key='1' className='col-xs-12 col-md-4' style={{marginBottom:'35px',}}>
     				
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
							height: '250px',
							backgroundImage: 'url(https://contents.hiltonhotels.jp/ko/h/kyohi/hotel_main_20200517222112_lg_sp.jpg)',
							backgroundSize: 'cover', 
							backgroundPosition: 'center',
							overflow: 'hidden',
							borderRadius:'40px',
						}}></div>
				  <div className='card-body'>
					<h5 className='card-title' 
						style={{
							  fontSize: '23px',
							  marginTop: '25px',
							  color: 'black',
						  }}>국방컨벤션</h5>
					  	
					 <div style={{
							  width: '100%',
							  textAlign: 'left',
							  padding: '10px 20px',
						  }}>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-telephone-fill" viewBox="0 0 16 16">
						  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
						</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>02-748-0744</span>

						</div>
						 <div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>서울 용산구</span>
						  
						</div>
						
					  </div>
						<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-arrow-right-circle" viewBox="0 0 16 16"
							style={{
							  position: 'absolute',
						      right: '45px',
							  bottom: '25px',
						  }}>
						  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
						</svg>
					{/*
					 <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					 
					<a href='#' className='btn btn-primary'>Go somewhere</a>
					*/}
					</div>
				  </div>
				</div>

				</div>			
			
			<div key='1' className='col-xs-12 col-md-4' style={{marginBottom:'35px',}}>
     				
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
							height: '250px',
							backgroundImage: 'url(https://contents.hiltonhotels.jp/ko/h/kyohi/hotel_main_20200517222112_lg_sp.jpg)',
							backgroundSize: 'cover', 
							backgroundPosition: 'center',
							overflow: 'hidden',
							borderRadius:'40px',
						}}></div>
				  <div className='card-body'>
					<h5 className='card-title' 
						style={{
							  fontSize: '23px',
							  marginTop: '25px',
							  color: 'black',
						  }}>국방컨벤션</h5>
					  	
					 <div style={{
							  width: '100%',
							  textAlign: 'left',
							  padding: '10px 20px',
						  }}>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-telephone-fill" viewBox="0 0 16 16">
						  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
						</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>02-748-0744</span>

						</div>
						 <div>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg>
						<span style={{
									fontSize: '20px',
									display: 'inline-block',
									marginLeft:'6px',
									color: 'black',
								}}>서울 용산구</span>
						  
						</div>
						
					  </div>
						<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-arrow-right-circle" viewBox="0 0 16 16"
							style={{
							  position: 'absolute',
						      right: '45px',
							  bottom: '25px',
						  }}>
						  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
						</svg>
					{/*
					 <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					 
					<a href='#' className='btn btn-primary'>Go somewhere</a>
					*/}
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
			  }} href="/hotel">호텔/콘도 더보기</a>
      </div>
    </div>
  )
}
