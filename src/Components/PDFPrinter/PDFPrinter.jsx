import Button from "react-bootstrap/Button";
import * as React from "react";
import ReactToPrint from "react-to-print";
import { PDFPrintForm } from "../PDFPrintForm/PDFPrintForm";
import "./PDFPrinter.css"

export class PDFPrinter extends React.PureComponent {

  componentRef = null;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      text: "old boring text"
    };
  }

  handleAfterPrint = () => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  };

  handleBeforePrint = () => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  };

  handleOnBeforeGetContent = () => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    this.setState({ text: "Loading new text...", isLoading: true });

    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState(
          { text: "New, Updated Text!", isLoading: false },
          resolve
        );
      }, 2000);
    });
  };

  setComponentRef = (ref) => {
    this.componentRef = ref;
  };

  reactToPrintContent = () => {
    return this.componentRef;
  };

  reactToPrintTrigger = () => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return <Button type="button" variant="outline-light">Print To PDF</Button>;
  };

  render() {
    return (
      <div>
        <ReactToPrint
          content={this.reactToPrintContent}
          documentTitle="AwesomeFileName"
          onAfterPrint={this.handleAfterPrint}
          onBeforeGetContent={this.handleOnBeforeGetContent}
          onBeforePrint={this.handleBeforePrint}
          removeAfterPrint
          trigger={this.reactToPrintTrigger}
        />
        {this.state.isLoading && (
          <p className="indicator">Magic Is Happening...</p>
        )}
        <PDFPrintForm selectedVehicle={this.props.selectedVehicle} get_user_services={this.props.get_user_services} get_user_vehicle_services={this.props.get_user_vehicle_services} user={this.props.user} ref={this.setComponentRef} text={this.state.text} />
      </div>
    );
  }
}
