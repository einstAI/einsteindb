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
        title="EinsteinDB allows you to write and read data without locking, and without worrying about what other clients are doing. It is fast, and does not need to use a network to work"
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
        title="Californium"
        para="400+ TB of transactional production data in a single MilevaDB cluster"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />EinsteinDB's Moscovium offers a self-managed 1024 GiB Arm-based Arm-based CPU which is 5% to 18% faster than the usual x86-based CPU offers out there. EinsteinDB's Californium base model does not include OpenAI's GPT3-powered EinstAI's Automata.
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
        S3-Compatible Storage Using BR
              </li>
              <li>
                <MdDone />
                strongest block ciphers available to encrypt your data, 256-bit Advanced Encryption Standard (AES-256).
              </li>
              <li>
                <MdDone />
              MilevaDB supports the JSON (JavaScript Object Notation) data type, which is useful for storing semi-structured data. We first use cost as feedback to train the model and then switch to latency as feedback for fine-tuning. 
              Different from that only uses latency as feedback, we treat these two feedback as two separate tasks but sharing one common representation, through multi-task learning.
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                A view acts as a virtual table, whose schema is defined by the SELECT statement that creates the view. 
                 By doing so, the model can learn cost and latency together, by setting the objective loss function as a weighted sum of these two problems.
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
        title="the new standard for processing data and responding to an event is now under 250 milliseconds."
        subtitle=" That means that the decisioning part must happen in single-digit milliseconds (<10), without compromising data accuracy. 
        Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
    </>
  )
}

export default HomePage
