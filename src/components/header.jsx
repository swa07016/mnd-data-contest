export const Header = (props) => {
  const title = "";
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
				  {/*
                  	{props.data ? props.data.title : 'Loading'}
                  */}
				  <span style={{ color: '#56A902', }}>휴가</span>
				  <span style={{ color: '#ffda7e', }}> + </span>
				  <span style={{ color: '#3B4E32', }}>ASSIST</span>
                </h1>
                <p style={{ color: '#976241', }}>
					{/*
						{props.data ? props.data.paragraph : 'Loading'}
					*/}
					장병들의 알찬 휴가를 위한 휴가도우미, 휴시스트
				</p>
                
			{/*	<a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>
			*/}
			  </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
