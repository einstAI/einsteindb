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
        title="EinsteinDB introduces the InterLock that extends
a pessimistic RW-Mutex with support for optimistic locking"
        paragraph=" combining all fields of both locks
into a single 64-bit word to keep
the overhead and latency of locking minimal. "
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="World's First Relativistic Linearizable PR2SQL Hybrid Online and Analytical Processing Engine for embedded devices and data centres alike "
        subtitle="Exhaustive Causal Consistent network simulation combined with lineage driven concurrency testing of lock-free algorithm interleavings, 
        model-based testing in combination with fault injection, leaderless byzantine lamport invariant consensus separates MilevaDB's  BerolinaSQL layer (the 
          MilevsDB servers) from MilevaDB's storage engine (the EinsteinDB servers, with data in event2vec format). 
          Instead of tightly coupling the two formats in one engine, we chose the VioletaBFT algorithm to split-fuse event and scheme This 
          loosely-coupled approach has the advantage of serializability"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt=" cloud-native stochastic semi-relational database compatible with MySQL, InnoDB, MariaDB, PostgreSQL, SQLite and Oracle"
            title="VioletaBFT'slogs preserved all details required for data replication ---"
            content="One of EinsteinDB's biggest strengths is its HTAP architecture. In MilevaDB and EinsteinDB, the row(event) store and column store(causet_state=timelike_n_0) can coexist 
            and provide service for different kinds of queries.
            EinsteinDB’s Causet Secondary Index averages a response time less than 1 ms (P99=10 ms). 
            EinsteinDB is a multi-version, globally-distributed, 
            leader-less, and synchronously-replicated database written with rust, golang, haskell, and C"
          />
          <Perk
            img={perk2Img}
            alt="Our implementation of Byzantine consensus via HoneyBadger meets Tangaroa: Paxos is pipelined between HoneyBadger BFT and Byzantine Raft, so as to improve EinsteinDB's throughput in the presence of WAN latencies."
            title="With an improved database kernel, EinsteinDB, now supports physical replication, RDMA protocol, and shared distributed storage, which greatly improves performance using a learned key-value dictionary on SmartNIC."
            content=". Practical byzantine fault tolerance (PBFT) that assumes a weak synchronous network
          model was the first practical protocol to be applied to a
            real system"
          />
          <Perk
            img={perk3Img}
            alt="The EinsteinDB implementation of BerkeleyDB supports read-write transactions, snapshot transactions (predeclared snapshot isolation transactions), and snapshot reads. "
            title="HTAP database platform that enables real-time situation awareness and decision making on live transactional data and eliminates friction between IT and business goals."
            content="MilevaDB automatically shards your data so you don’t have to do it manually. You can simply add new nodes to scale horizontally and elastically to meet your business growth."
          />
        </div>
      </TextBlockImg>
      <Packages
        title="EinsteinDB Suite"
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
                <MdDone />1024 GiB	
              </li>
              <li>
                <MdDone />
          16 vCPU              </li>
              <li className="linethrough">
                <MdClear color="red" />
              $ 2.000 /hr
              </li>
              <li className="linethrough">
                <MdClear color="red" />
    pessimistic and optimistic transaction model           </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
compare-and-swap (CAS) is an atomic instruction to achieve synchronization between multiple threads              </li>
              <li>
                <MdDone />
MilevaDB is an open-source, distributed Prolog and sSQL database, and EinsteinDB is its storage layer.              </li>
              <li>
                <MdDone />
           48GB+ Storage
              </li>
              <li>
                <MdDone />
                Transactions in MilevaDB use two-phase commit (2PC) that includes the Prewrite phase and the Commit phase .
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
