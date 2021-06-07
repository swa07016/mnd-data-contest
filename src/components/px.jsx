export const Px = (props) => {
  return (
    <div id='px' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'
			 style={{
				  marginBottom: '0px',
				  marginRight: '8.33333333%',
			  }}>
          <h2 style={{ fontFamily: 'Do Hyeon, sans-serif', }}>PX인기상품</h2>
		  <p style={{
					marginBottom: '60px',
				}}>
			가족들, 친구들을 위한 선물!
          </p>
        </div>
		<div class="container">
			<ul class="nav nav-tabs">
			  <li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#qwe">2021/03</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#asd">2021/04</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#zxc">2021/05</a>
			  </li>
			<li class=""
				style={{
						float: 'right',
					}}>
				<div class="" data-toggle="tab"
					style={{
						padding: '10 15px',
					}}>최근 3개월의 데이터만 제공합니다.</div>
			  </li>
			</ul>
			<div class="tab-content">
			  <div class="tab-pane fade active" id="qwe">
				
				  <div className='row'>
					<div key='1' className='col-xs-6 col-md-3'>
						  {' '}
						  <i className='fa fa-comments-o'
							 style={{
								backgroundImage: 'url(https://static-s.aa-cdn.net/img/gp/20600003704161/dVQ6d8I7XDOkr72-jcAUHsCfQ_ih9p9HUaca82obM6LlmJOKAA8BuY776Xns40Nifg=s300?v=1)',
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
				  <div className='row'>
					<div key='1' className='col-xs-6 col-md-3'>
						  {' '}
						  <i className='fa fa-comments-o'
							 style={{
								backgroundImage: 'url(https://static-s.aa-cdn.net/img/gp/20600003704161/dVQ6d8I7XDOkr72-jcAUHsCfQ_ih9p9HUaca82obM6LlmJOKAA8BuY776Xns40Nifg=s300?v=1)',
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
				  
			  </div>
			  <div class="tab-pane fade" id="asd">
				<p>Nunc vitae turpis id nibh sodales commodo et non augue. Proin fringilla ex nunc. Integer tincidunt risus ut facilisis tristique.</p>
			  </div>
			  <div class="tab-pane fade" id="zxc">
				<p>Curabitur dignissim quis nunc vitae laoreet. Etiam ut mattis leo, vel fermentum tellus. Sed sagittis rhoncus venenatis. Quisque commodo consectetur faucibus. Aenean eget ultricies justo.</p>
			  </div>
			</div>
		</div>
		  {/*
		  <a style={{
				  display: 'inline-block',
				  backgroundColor: 'rgb(74,174,160)',
				  fontSize: '20px',
				  padding: '13px 15px',
				  color: 'white',
			 	  borderRadius: '27px',
				  marginTop: '40px',
			  }} href="#">할인혜택 더보기</a>
      		*/}
	  </div>
    </div>
  )
}
