export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'
			  style={{ fontFamily: 'Do Hyeon, sans-serif', }}>
			  <span style={{ color: '#686F12', }}>휴</span>
			  <span style={{ color: '#976241', }}>시</span>
			  <span style={{ color: '#c7ca9c', }}>스</span>
			  <span style={{ color: '#ffda7e', }}>트</span>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/benefit'>
                할인혜택
              </a>
            </li>
            <li>
              <a href='/tmo'>
                TMO
              </a>
            </li>
            <li>
              <a href='/#px'>
                PX인기상품
              </a>
            </li>
            <li>
              <a href='hotel'>
                호텔/콘도
              </a>
            </li>
			<li>
              <a href='/#golf'>
                체력단련장
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
