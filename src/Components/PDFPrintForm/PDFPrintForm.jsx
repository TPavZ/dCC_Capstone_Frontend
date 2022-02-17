import * as React from "react";
import ServiceTable from "../ServiceTable/ServiceTable";

export class PDFPrintForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  canvasEl;

  setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;

    return (
      <ServiceTable get_user_services={props.get_user_services} get_user_vehicle_services={props.get_user_vehicle_services}/>
    );
  }
}

export const FunctionalPDFPrintForm = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <PDFPrintForm ref={ref} text={props.text} />;
});