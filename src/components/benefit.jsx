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
						backgroundImage: 'url(https://cdn.jsdelivr.net/gh/swa07016/mealkhu-cdn@latest/huesist/benefit/cgv.png)',
					}}></i>
                  <h3>CGV</h3>
                  <p>연중이용할인</p>
                </div>
			<div key='2' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://m.giftishow.com/Resource/brand/BR_20140507_144311_3.jpg)',
					}}></i>
                  <h3>VIPS</h3>
                  <p>연중이용할인</p>
                </div>
			<div key='3' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://mblogthumb-phinf.pstatic.net/20160427_290/ppanppane_14617399302391JHhT_PNG/cgv%2C%B8%DE%B0%A1%B9%DA%BD%BA_%B7%CE%B0%ED_%285%29.png?type=w2)',
					}}></i>
                  <h3>MEGABOX</h3>
                  <p>연중이용할인</p>
                </div>
			<div key='4' className='col-xs-6 col-md-3'>
                  {' '}
                  <i className='fa fa-comments-o'
					 style={{
						backgroundImage: 'url(https://static.leisureq.io/origin/production-gajago-deal-images/74429d6a-8301-45d7-ad3d-cafc5affd9f5.png)',
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
