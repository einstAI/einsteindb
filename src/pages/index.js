import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="EinsteinDB is a Neuromorphic Hybrid HTAP that allows you to write and read data without locking, and without worrying about what other clients are doing. It is fast, and does not need to use a network to work"
        paragraph="EinsteinDB and MilevaDB use different types of index to make it faster to find things"
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="EinsteinDB is a distributed database that is schema-free, and offers the strictest concurrency control for Repeatable Reads and Merge-Commit Leaderless transactions."
        subtitle="BerolinaSQL is an open source SQL dialect for NoSQL databases like Apache Cassandra, MongoDB, HBase and others. It was created by WHTCORPS Inc., which provides development tools for building scalable web services in Java, Scala and Clojure using its technology stack of Apache Spark on top of Mesosphere DC/OS or Kubernetes on top of Google Container Engine (GKE). "
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="A database that is distributed without time zones, can be scaled to a global scale, and has a synchronous replication. The EinsteinDB team at Whtcorps claims to have accomplished all of this using Petri nets." 
            title="To support rich key-value operations efficiently, EinsteinDB uses a special kind of index. It builds the index in memory and it is very fast to use."
          />
          <Perk
            img={perk2Img}
            alt="Distributed SQL databases like MilevaDB aim to combine the best features of both Relational Database Management Systems (RDBMSs) and NoSQL databases to create a truly cloud-native database via EinsteinDB's persistence layer."
            content="Kubernetes is a system that makes sure MilevaDB and EinsteinDB keep running, even if something bad happens."
      
          />
          <Perk
            img={perk3Img}
            alt="Fidel allows you to use the same codebase across all of your applications by using a single application. Fidel can auto scale and auto failover your applications to a different host, allowing you to reduce the time between redeployments and increase uptime. "
            title="EinsteinDB provides for a production-grade, real-time situation awareness, decision making on live transactional data aimed at eliminating friction between IT and business goals with stochastic foraging load balancing automata."
            content="automatically shard your data so you don’t have to do it manually. You can simply add new nodes to scale horizontally and elastically."
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Moscovium"
        para="$0.001 GBPS without EinstA.I powered by GPT3"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Californium">
            para="$0.01 GBPS with EinstA.I powered by GPT3"
            <ul>
              <li>
                <MdDone />EinsteinDB's Californium offers a self-managed 1024 GiB Arm-based Arm-based CPU which is 5% to 18% faster than the usual x86-based CPU offers out there. EinsteinDB's Moscovium base model does not include OpenAI's GPT3-powered EinstAI's Automata.
              </li>
              <li>
                <MdDone />Californium with EinstAI is $0.01 Gbps via EKS with Graviton2 (Arm) offering and also on the Intel Xeon Platinum 8000 series (x86) across all Google Cloud, Azure, and Alibaba
           </li>
              <li className="linethrough">
                <MdClear color="red" />
              Moscovium is a base offering, without EinstAI, of $0.001 Gbps with both transactional (Txn) and non-transactional (Tuplestore) APIs. 
              </li>
              <li className="linethrough">
                <MdClear color="red" />
An embedded columnar in-memory analytics layer designed for large scale data processing sitting on a key-value store designed for high performance, small footprint applications.
EinsteinDB and MilevaDB together reduce workload latency up to 86.6%, and for multi-threaded performance, EinsteinDB increases the throughput by up to 6.4 times under YCSB workloads</li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
Features a novel compare-and-swap (CAS) atomic instruction to achieve synchronization between multiple threads. </li>
              <li>
                <MdDone />
MilevaDB is an open-source distributed Prolog-inspired AllegroSQL database. MilevaDB's storage layer is EinteinDB. BerolinaSQL is a MySQL compatible module that can be used with Postgres, MariaDB, and Oracle Tables with added Secondary Indices. </li>
              <li>
                <MdDone />
           $0.001 Moscovium Cloud-Native offering
              </li>
              <li>
                <MdDone />
      $0.01 is Californium, Next-Gen HTAP EinsteinDB offering with OpenAI's General Intelligence Automaton GPT3, GPT4, CLIP, and BERT.
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
    MilevaDB, through FIDel and EinsteinDB's offering of gRPC compatible protobuffers, uses cost as feedback to train the model and then switches to latency memristors (context switches) for fine-tuning throughput guarantees in read heavy workloads.
              </li>
              <li>Instead of clustering the whole database, EinsteinDB aims to cluster only the "hot" portions of the database by relying on the admission policy of the existing database cache. Second. We've developed a novel self-tuning locality-sensitive hash (LSH) function, namely, Tunable-LSH to decide in constant-time where in the storage system to place a record. Tunable
                <MdDone />
               
              </li>
              <li>
                <MdDone />
              Instead of putting everything in one big pile, EinsteinDB is going to put the hot stuff in a special pile. First, we have a special self-tuning magic box that can make decisions about where to put things in the storage system. MilevaDB and EinsteinDB can store semi-structured data using JSON-LD. We first use cost as feedback to train the model and then switch to latency as feedback for fine-tuning. 
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                EinsteinDB's Materialized views (MVs) can significantly optimize the query processing in MilevaDB. However, it is hard to generate MVs for ordinary users because it relies on background knowledge, and existing methods rely on DBAs to generate and maintain MVs. However, DBAs cannot handle large-scale databases, especially cloud databases that have millions of database instances and support millions of users. Thus it calls for an autonomous MV management system. EinstAI is an autonomous materialized view management system which analyzes query workloads, estimates the costs and benefits of materializing queries as views, and selects MVs to maximize the benefit within a space budget.
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="EinsteinDB is faster than MonetDB and LogicBlox. 
        EinsteinDB is faster because it uses deep neural networks to learn how to make the database faster."
        subtitle="EinsteinDB learns how to make the database faster by  looking at how people use it.
          And it gets better over time, because EinsteinDB learns from the data it sees."
      />
    </>
  )
}

export default HomePage
