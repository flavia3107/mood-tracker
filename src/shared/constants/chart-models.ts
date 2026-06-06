import {
	ApexAnnotations,
	ApexAxisChartSeries,
	ApexChart,
	ApexDataLabels,
	ApexFill, ApexGrid,
	ApexLegend,
	ApexMarkers,
	ApexNonAxisChartSeries,
	ApexPlotOptions,
	ApexResponsive,
	ApexStates,
	ApexStroke,
	ApexTheme,
	ApexTitleSubtitle,
	ApexTooltip,
	ApexXAxis,
	ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
	series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
	chart?: ApexChart;
	xaxis?: ApexXAxis;
	yaxis?: ApexYAxis | ApexYAxis[];
	title?: ApexTitleSubtitle;
	subtitle?: ApexTitleSubtitle;
	dataLabels?: ApexDataLabels;
	stroke?: ApexStroke;
	fill?: ApexFill;
	legend?: ApexLegend;
	tooltip?: ApexTooltip;
	markers?: ApexMarkers;
	plotOptions?: ApexPlotOptions;
	responsive?: ApexResponsive[];
	grid?: ApexGrid;
	annotations?: ApexAnnotations;
	states?: ApexStates;
	theme?: ApexTheme;
	colors?: string[];
	labels?: any;
};


export const CHART_OPTIONS: Partial<ChartOptions> = {
	chart: {
		type: 'area',
		height: 50,
		width: 290,
		zoom: {
			enabled: false,
		},
		sparkline: {
			enabled: true
		}
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth',
		width: 2
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.2,
			stops: [0, 90, 100]
		}
	},
	xaxis: {
		type: 'datetime',
		labels: { show: false },
		axisBorder: { show: false },
		axisTicks: { show: false }
	},
	yaxis: {
		show: false
	}
};