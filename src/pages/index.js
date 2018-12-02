import React from 'react'
import Layout from '../components/layout'
import oceanView from '../images/ocean-view.jpg'

const IndexPage = () => (
  <Layout>
    <p>West Michigan's Local Repairman, Service Company and Maintenance Contractor for all brands of Commercial and Residential Custom Installed or Portable Spas & Hot Tubs, Whirlpool, Jetted & Air Bath Tubs, Luxury Shower Systems, Steam Baths, Saunas, Swimming & Lap Pools, Swim Spas, Spa Pedicure Chairs & Baptismal Immersion Systems for Grand Rapids, Muskegon, Grand Haven, Holland to Kalamazoo, Lansing and more.</p>
    <img src={oceanView} alt="ocean view" />
  </Layout>
)

export default IndexPage
