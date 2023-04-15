import { selectMode  , toggleDarkMode} from '../Redux/Features/darkModeSlice';
import { useSelector , useDispatch } from 'react-redux';

function Header() {

  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="title">TODO</div>
      <div className="theme" onClick={ () => dispatch( toggleDarkMode() ) }>
        <div className={ mode ? 'sun' : 'moon' }></div>
      </div>
    </div>
  );
}

export default Header;

