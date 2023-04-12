import "./styles/styles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FormField from "./components/formfield";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import Modal from "./components/modal";
import TransformExe from "./components/transform-exe";
import FlexExe from "./components/flex-exe";
import IconEdit from "./components/icon-edit";
import Input from "./components/input";
import Card from "./components/card";
import Card2 from "./components/card2";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Input label="First name" validation="Success!" />
      <Input label="Last name" rounded />
      <Button animate={true} value="Animate me" icon={<IconEdit />} />
      <Button animate={false} btn--red />
      <Checkbox />
      <FormField />
      <Pagination />
      <Tags />
      <Modal />
      <div className="container__component">
        <h2>Transform property excercise</h2>
        <TransformExe />
        <FlexExe></FlexExe>
      </div>
      <div className="card__grid">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card2__grid">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
};
export default App;
