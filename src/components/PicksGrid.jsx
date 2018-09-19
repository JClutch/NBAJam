import React, { Component } from 'react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-dark.css';
import { AgGridReact } from 'ag-grid-react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Result", field: "result"},
                {headerName: "Matchup", field: "matchup"},
                {headerName: "Spread", field: "spread"},
                {headerName: "Projection", field: "projection"},
                {headerName: "Pick(ATS)", field: "pick"},
                {headerName: "Difference", field: "difference"},
                {headerName: "Rank", field: "rank"},
                {headerName: "Notes", field: "notes"},

            ],
            rowData: [
                {result: "L", matchup: "Toronto Raptors @ Orlando Magic", spread: "Toronto Raptors (-9)", projection: "Raptors -1.57" , pick: "Magic +9", difference: 7.43, rank: 1},
                {result: "L", matchup: "Houston Rockets @ Los Angeles Clippers", spread: "Houston Rockets (-8)", projection: "Rockets -1.32", pick: "Clippers +8", difference: 6.68, rank: 2},
                {result: "W", matchup: "Indiana Pacers @ Atlanta Hawks", spread: "Indiana Pacers (-5)", projection: "Pacers -0.18", pick: "Pacers +5", difference: 4.82, rank: 3},
                {result: "L", matchup: "Charlotte Hornets @ Boston Celtics", spread: "Boston Celtics (-7.5)", projection: "Celtics -3.4", pick: "Hornets +7.5", difference: 4.1, rank: 4},
                {result: "W", matchup: "Golden State Warriors @ Washington Wizards", spread: "Golden State Warriors (-9)", projection: "Warriors -4.97", pick: "Wizards +9", difference: 4.03, rank: 5},
                {result: "W", matchup: "Oklahoma City Thunder @ Dallas Mavericks", spread: "Oklahoma City Thunder (-5)", projection: "Thunder -2.04", pick: "Mavericks +5", difference: 2.96, rank: 6},
                {result: "W", matchup: "New Orleans Pelicans @ San Antonio Spurs", spread: "San Antonio Spurs (-4.5)", projection: "Spurs -2.85", pick: "Pelicans +4.5", difference: 1.65, rank: 7},
                {result: "W", matchup: "Phoenix Suns @ Memphis Grizzlies", spread: "Memphis Grizzlies (-2.5)", projection: "Grizzlies -1.8", pick: "Suns +2.5", difference: 0.7, rank: 8},
                {result: "", matchup: "Milwaukee Bucks @ Detroit Pistons", spread: "Detroit Pistons (-2)", projection: "Pistons -1.66", pick: "Bucks +2", difference: 0.34, rank: 9},
            ]
        }
    }

    render() {
        return (
                <div agGrid="gridOptions" class="ag-theme-dark"
                  style={{ 
	                height: '60%', 
	                width: '80%',
                    margin: 'auto'
                     }} 
		            >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        groupMultiAutoColumn={{
                        	cellRendererParams: {
                        		suppressCount: true,
                        	}
                        }}
                        enableColResize
                        enableSorting
                        enableFilter
                        sortingOrder={['desc', 'asc', null]}
                        enableRangeSelection={true}
                        enableStatusBar={true}
                        groupDefaultExpanded={-1}
                        gridAutoHeight={true}
                        >
                    </AgGridReact>
                </div>
            );
    }
}
                  /*className="ag-theme-balham"*/

export default App;