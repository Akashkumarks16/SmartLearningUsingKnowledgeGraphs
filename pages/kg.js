import Head from 'next/head'
import GraphFrontEnd from './components/graphfrontend'
import GraphFrontEnd2 from './components/graphfrontend2'
import GraphTour from '../components/GraphTour'

export default function Home() {

  return ( 
  <div>
    <Head>
      <title> Smart learning using Knowledge graphs</title>
      <meta name='keywords' content='web development, programming'/>
    </Head>
    <center> <GraphTour /> </center>
    
    <GraphFrontEnd title = "Neo4j" />
    <GraphFrontEnd2 title = "MongoDB"/>
  </div>
  )
}
