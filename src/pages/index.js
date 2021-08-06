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
        title="EinsteinDB allows only for an open world, Conflict-free, embeddedly consistent, schema-free persistence layer for both reads and writes independently of network conditions. A Thread-safe append-only with internal copy-on-write behavior that enables the fastest possible lock-free lookups via sRDMA"
        paragraph="supports rich key-value operations efficiently, EinsteinDB and MilevaDB exploit the distinct merits of hash indices and B+-Tree indices."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="the strictest concurrency-control guarantees for transactions. EinsteinDB meets the requirements for large storage capacity, low cost, and read and write capabilities."
        subtitle="Exhaustive Causal Consistent network simulation, lineage driven concurrency testing of lock-free algorithm interleavings, model-based testing in combination with fault injection, and leaderless byzantine lamport invariant consensus, clearly separates the production cycle at EinsteinDB and MilevaDB from the rest."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="A scalable, multiversion, globally distributed, and synchronously replicated relativistic database. Distribute at a global scale without timezones -- EinsteinDB uses a novel Hybrid Logic Clock based off of Petri Nets" 
            title="To support rich key-value operations efficiently, EinsteinDB exploits the distinct merits of a learned index and B+-Tree index. EinsteinDB builds and persists the hash index in NVM to retain its inherent ability of fast index searching."
          />
          <Perk
            img={perk2Img}
            alt="MilevaDB is EinsteinDB's second half, another open-source, cloud-native distributed SQL database that is ACID-compliant and strongly consistent. Distributed SQL databases like MilevaDB aim to combine the best features of both Relational Database Management Systems (RDBMSs) and NoSQL databases to create a truly cloud-native database. "
            content=" Kubernetes provides an advanced framework to run distributed systems such as MilevaDB and EinsteinDB with high resilience for mission critical business functions. "
      
          />
          <Perk
            img={perk3Img}
            alt="Deploy MilevaDB in Kubernetes. As a container orchestration platform, Kubernetes enables businesses to simplify deployment, streamline workload management, and automate operation and maintenance by utilizing its auto scaling and auto failover capabilities."
            title="EinsteinDB, MilevaDB's persistence key-value/tuplestore HTAP database platform, enables real-time situation awareness, decision making on live transactional data via einst.ai,  and eliminates friction between IT and business goals with stochastic foraging load balancing automata."
            content="MilevaDB automatically shards your data so you don’t have to do it manually. You can simply add new nodes to scale horizntally and elastically to meet your business growth."
          />
        </div>
      </TextBlockImg>
      <Packages
        title="EinsteinDB Californium"
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
                <MdDone />1024 GiB	Arm-based system and the x86-based system show an average difference around 5% to 18% with better performance for Graviton2 Arm running EinsteinDB Californium
              </li>
              <li>
                <MdDone />
           $0.01 Gbps EKS with Graviton2 (Arm) and on the Intel Xeon Platinum 8000 series (x86).            
           </li>
              <li className="linethrough">
                <MdClear color="red" />
               $0.001 Gbps EinsteinDB provides both transactional (Txn) API and non-transactional (Tuplestore) API.
              </li>
              <li className="linethrough">
                <MdClear color="red" />
For single-threaded performance, EinsteinDB outperforms the state-of-the-art NVM-based key-value stores by reducing latency up to 86.6%, and for multi-threaded performance, EinsteinDB increases the throughput by up to 6.4x under YCSB workloads.  </li>
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
