import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: 1,
    }
    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
    }
    render() {
        return (
            <Row>
                <Col span={12}>
                    <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
                </Col>
                <Col span={4} offset="4">
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}