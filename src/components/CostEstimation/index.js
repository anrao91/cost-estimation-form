import React, { useState } from "react";

import {
  AutoComplete,
  Form,
  Select,
  Radio,
  Button,
  Row,
  Col,
  Input,
} from "antd";

import { capitalize } from "../../utils";
import { paintLocationDetails, cities } from "../../fixtures";

export default () => {
  const cities_options = cities.map((city) => ({ value: city }));
  let initial_paint_area = [];
  let initial_paint_types = {};
  if (!!paintLocationDetails && !!paintLocationDetails.interior) {
    initial_paint_area = !!paintLocationDetails.interior.paint_area
      ? paintLocationDetails.interior.paint_area
      : [];
    initial_paint_types = !!paintLocationDetails.interior.paint_types
      ? paintLocationDetails.interior.paint_types
      : {};
  }

  const [form] = Form.useForm();
  const [paintArea, setPaintArea] = useState(initial_paint_area);
  const [paintTypes, setPaintTypes] = useState(initial_paint_types);
  const [currentPaintType, setCurrentPaintType] = useState("standard");
  const validateInput = (event) => {
    var charC = event.which ? event.which : event.keyCode;
    if (charC > 31 && (charC < 48 || charC > 57)) {
      event.preventDefault();
    }
  };

  const handleLocationTypeChange = (event) => {
    const newLocationType = event.target.value;
    if (
      !!newLocationType &&
      !!paintLocationDetails &&
      paintLocationDetails.hasOwnProperty(newLocationType)
    ) {
      setPaintArea(paintLocationDetails[newLocationType].paint_area);
      setPaintTypes(paintLocationDetails[newLocationType].paint_types);
      form.setFieldsValue({
        paint_name:
          paintLocationDetails[newLocationType]["paint_types"][
            currentPaintType
          ][0],
      });
    }
  };

  const handlePaintTypeChange = (event) => {
    const newPaintType = event.target.value;
    if (!!newPaintType && !!paintLocationDetails) {
      form.setFieldsValue({
        paint_type: newPaintType,
        paint_name: paintTypes[newPaintType][0],
      });
      setCurrentPaintType(newPaintType);
    }
  };
  const handleSubmit = (values) => {
    console.log("received values from the form are", values);
  };

  return (
    <div>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          name="city"
          label="Choose a city"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <AutoComplete
            options={cities_options}
            placeholder="Please select a city"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Form.Item>
        <Form.Item
          name="house_paint_application_type"
          label="Painting Type"
          initialValue="fresh_paint"
        >
          <Radio.Group>
            <Radio value="fresh_paint">Fresh Paint</Radio>
            <Radio value="repainting">Repainting</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="carpet_area"
          label="Carpet Area"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input the Carpet Area!",
            },
          ]}
        >
          <Input onKeyPress={validateInput} />
        </Form.Item>
        <Form.Item
          name="location_type"
          label="Interior/Exterior"
          initialValue="interior"
        >
          <Radio.Group onChange={handleLocationTypeChange}>
            <Radio.Button value="interior">Interior</Radio.Button>
            <Radio.Button value="exterior">Exterior</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {!!paintArea && !!paintArea.length > 0 && (
          <Form.Item name="paint_area" initialValue={paintArea[0]}>
            <Radio.Group>
              {paintArea.map((paintAreaValue) => (
                <Radio value={paintAreaValue}>
                  {capitalize(paintAreaValue)}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        )}

        <Form.Item name="paint_type" label="Paint Type" initialValue="standard">
          <Radio.Group onChange={handlePaintTypeChange}>
            <Radio.Button value="standard">Standard</Radio.Button>
            <Radio.Button value="premium">Premium</Radio.Button>
            <Radio.Button value="super_premium">Super-Premium</Radio.Button>
            <Radio.Button value="luxury">Luxury</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {!!paintTypes && (
          <Form.Item
            name="paint_name"
            initialValue={paintTypes[currentPaintType][0]}
          >
            <Radio.Group>
              {Object.keys(paintTypes).map((paintType) => {
                let paintNames = [];
                if (currentPaintType === paintType) {
                  paintNames = paintTypes[paintType];
                }

                return paintNames.map((paintName) => (
                  <Radio value={paintName}>{paintName}</Radio>
                ));
              })}
            </Radio.Group>
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Calculate Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
