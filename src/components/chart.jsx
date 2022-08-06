import * as React from 'react';
import Paper from '@mui/material/Paper';
import * as dayjs from 'dayjs'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation } from '@devexpress/dx-react-chart';

const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`,
};

const format = () => tick => tick;

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label sx={{ pt: 1, whiteSpace: 'nowrap' }} {...props} />
);
const Item = props => (
  <Legend.Item sx={{ flexDirection: 'column' }} {...props} />
);

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
    />
  );
};

const TitleText = props => (
  <Title.Text {...props} sx={{ whiteSpace: 'pre' }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px',
  },
}));

export default class Charts extends React.PureComponent {
  constructor(props) {
    super(props);

    const apiData = [
        {
          "name": "Core Temperature",
          "label": "coretemp",
          "data": [
            {
              "value": 71.631,
              "time": "2022-08-04T07:55:22.348Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 72.246,
              "time": "2022-08-04T07:55:29.686Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 72.246,
              "time": "2022-08-04T07:55:37.201Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 72.246,
              "time": "2022-08-04T07:55:43.883Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 72.246,
              "time": "2022-08-04T07:55:51.376Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 71.631,
              "time": "2022-08-04T07:55:58.689Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 72.246,
              "time": "2022-08-04T07:56:05.392Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 72.861,
              "time": "2022-08-04T07:56:12.976Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 71.631,
              "time": "2022-08-04T07:56:19.951Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "cortemp": 71.631,
              "time": "2022-08-04T07:56:26.707Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            }
          ]
        },
        {
          "nameModenr": "Modem Temperature",
          "label": "modem.pctemp",
          "data": [
            {
              "value": 47,
              "time": "2022-08-04T07:55:22.348Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:55:29.686Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:55:37.201Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:55:43.883Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:55:51.376Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:55:58.689Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:56:05.392Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:56:12.976Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 47,
              "time": "2022-08-04T07:56:19.951Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            },
            {
              "value": 7,
              "time": "2022-08-04T07:56:26.707Z",
              "host": "mobizlte-e8b8e063d2494124",
              "table": 0
            }
          ]
        }
    ]

    console.log(this);

    const dataChart = apiData[0]?.data.map((item) => {
        const dataModernSelectByTime = apiData[1].data.find(data => data.time === item.time)
        return {
           time: dayjs(item.time).format('HH:MM:ss'),
           coretemp: item.value,
           mordernPctemp: dataModernSelectByTime.value ?? 0
        }
    })

    this.state = {
        dataCoretemp: apiData[0],
        dataModern: apiData[1],
      data: dataChart,
      hoa: 10
    };
  }

  render() {
    const { data: chartData, dataCoretemp, dataModern } = this.state;

    return (
      <Paper>
        <StyledChart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />

          <LineSeries
            name={dataCoretemp?.label}
            valueField="coretemp"
            argumentField="time"
          />
          <LineSeries
            name={dataModern?.label}
            valueField="mordernPctemp"
            argumentField="time"
            color="green"
          />
          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          <Title
            text={`Confidence in Institutions in American society ${'\n'}(Great deal)`}
            textComponent={TitleText}
          />
          <Animation />
        </StyledChart>
      </Paper>
    );
  }
}