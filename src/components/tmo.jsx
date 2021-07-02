import KakaoMap from './KakaoMap.js';

export const Tmo = (props) => {
  return (
    <div id='tmo' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '60px',
			  }}>
          <h2 style={{ 
					fontFamily: 'Do Hyeon, sans-serif', 
					color: 'white',
				}}>TMO</h2>
		  <p style={{
					color: 'white',
				}}>
             전국의 TMO정보를 알아보세요! 
          </p>
        </div>
        <div className='container' 
			style={{
				  borderRadius: '20px',
			  }}>
  			<KakaoMap
			  level={3}
			  longitude={126.972559}
			  latitude={37.554648}
			  zoomable={false}
			  appKey='84671e3c07cbab858c6ad23726ccfbda'
			/>
        </div>
		  <div style={{
				  fontSize: '24px',
				  marginTop: '20px',
				  color: 'rgb(74, 174, 160)',
			  }}>
			서울역TMO : 서울역사 2층 서부출입구 우측 10m 지점
		  </div>
		  <a style={{
				  display: 'inline-block',
				  backgroundColor: 'rgb(255, 218, 126)',
				  fontSize: '20px',
				  padding: '13px 15px',
				  color: 'white',
			 	  borderRadius: '27px',
				  marginTop: '50px',
			  }} href="/tmo">TMO정보 더보기</a>
      </div>
    </div>
  )
}
