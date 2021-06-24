export const Benefit = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '0px',
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>병사할인혜택</h2>
		  <p>
            다양한 병사할인혜택을 알아보세요!  
          </p>
        </div>
        <div className='row'>
  			<div key='1' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/benefit/cgv.png)',
					}}></i>
                  <h3>CGV</h3>
                  <p>연중이용할인</p>
                </div>
			<div key='2' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/benefit/vips.jpg)',
					}}></i>
                  <h3>VIPS</h3>
                  <p>연중이용할인</p>
                </div>
			<div key='3' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/benefit/megabox.png)',
					}}></i>
                  <h3>MEGABOX</h3>
                  <p>연중이용할인</p>
                </div>
			<div key='4' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/huesist-cdn@latest/benefit/aqua.png)',
					}}></i>
                  <h3>AQUA PLANET</h3>
                  <p>이용할인</p>
                </div>
        </div>
		  <a style={{
				  display: 'inline-block',
				  backgroundColor: 'rgb(74,174,160)',
				  fontSize: '20px',
				  padding: '13px 15px',
				  color: 'white',
			 	  borderRadius: '27px',
				  marginTop: '40px',
			  }} href="/benefit">할인혜택 더보기</a>
      </div>
    </div>
  )
}
