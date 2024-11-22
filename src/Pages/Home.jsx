import Box from "../components/Box";
import PizzaChart from "../components/PizzaChart";
import Vendas from "../components/VendasChart";
import data from "../../data";

import pv from '../assets/Total/pv.svg'
import plus from '../assets/Total/plus.svg'
import simImg from '../assets/Total/pv.svg'
import time from '../assets/Total/time.svg'
import view from '../assets/Total/view.svg'
import proposalicon from '../assets/Total/proposal-icon.svg'

export default function Home() {
  const prop = data.totais.quantProp
  const pev = data.totais.quantPv
  const sim = data.totais.rateSdrSim
  const propXpv = data.totais.ratePropPv
  const sdrXsim = data.totais.rateSdrSim

  const totais = [
    {
      total: prop,
      title: 'Quant Prop',
      svg: plus
    },
    {
      total: pev,
      title: 'Quant PV',
      svg: view

    }, {
      total: sim,
      title: 'Rate Sdr x Sim',
      svg: simImg

    },
    {
      total: propXpv,
      title: 'Rate Sim x Prop',
      svg: proposalicon

    },
    {
      total: sdrXsim,
      title: 'Rate Prop x PV',
      svg: time

    }]
  return (
    <main className="bg-bg flex flex-col items-center py-24 space-y-16 w-full px-5">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      <div className="w-full max-w-[1200px] flex flex-wrap justify-center items-center space-y-14">

        <div className="flex flex-wrap justify-center items-center">
          {
            totais.map((total, index) => (
              <Box key={index} total={total.total} title={total.title} icon={total.svg} />
            ))
          }

        </div>
        <div className="w-full flex flex-col lg:flex-row items-start space-y-2.5 lg:space-y-0 space-x-2 lg:space-x-5 ">

          <div className="w-full h-full">
            <Vendas />

          </div>
          <div className="w-full lg:w-1/2 h-full">
            <PizzaChart />

          </div>


        </div>
      </div>

    </main>
  )
}