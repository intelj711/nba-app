import React from 'react';
import { ShotChart } from './ShotChart';
import {CountSlider} from './CountSlider';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: "hexbin",
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: Number(count) || 2 });
    }

    onCharTypeChange = (e) => {
        this.setState({chartType: e.target.value });
    }

    render() {
        return(
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                />

                <div className="filters">
                    {this.state.chartType === "hexbin" ?
                        <CountSlider
                            minCount={this.state.minCount}
                            onCountSliderChange={this.onCountSliderChange}/>
                         : null}
                    <Row>
                        <Col span={12} offset="2">
                            <RadioGroup onChange={this.onCharTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">hexbin</Radio>
                                <Radio value="scatter">scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}