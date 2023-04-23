import { Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from 'react-chartjs-2';

ChartJs.register(
    ArcElement, Tooltip, Legend
);

const options = {
    resposive: true,
    maintainAspectRatio: false,
}

const data = {
    labels: ['charque', 'pique', 'conejo', 'almuerzo', 'Coca'],
    datasets: [
        {
            label: 'Popularidad en navidad',
            data: [ 12,45,12,45,25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75,192,192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75,192,192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderWidth: 1,
        }
    ]
}
export default function Pies(){
    return(
        <div className='report-grafics__pies'>
            <div className='report-pies'>
              <Pie data={data} options={options}/>
            </div>
        </div>
    ) 
}