import './App.css';
import ButtonWithIcon from './components/ButtonWithIcon';
import DynamicIconExample from './components/DynamicIconExample';
import IconExample from './components/IconExample';
import MenuWithIcons from './components/MenuWithIcons';

function App() {
  return (
    <div>
      <IconExample />
      <DynamicIconExample iconName="SmileOutlined" />
      <ButtonWithIcon/>
      <MenuWithIcons/>
    
    </div>
  );
}

export default App;
