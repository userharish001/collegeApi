import express from 'express'
const app = express()

const CentralU = [
  {
    "id": 1,
    "name": "University of Delhi",
    "abbreviation": "DU",
    "location": "New Delhi, Delhi",
    "type": "Government",
    "zip": "110007",
    "link": "http://www.du.ac.in/"
  },
  {
    "id": 2,
    "name": "Jawaharlal Nehru University",
    "abbreviation": "JNU",
    "location": "New Delhi, Delhi",
    "type": "Government",
    "zip": "110067",
    "link": "https://www.jnu.ac.in/"
  },
  {
    "id": 3,
    "name": "Banaras Hindu University",
    "abbreviation": "BHU",
    "location": "Varanasi, Uttar Pradesh",
    "type": "Government",
    "zip": "221005",
    "link": "https://www.bhu.ac.in/"
  },
  {
    "id": 4,
    "name": "University of Mumbai",
    "abbreviation": "MU",
    "location": "Mumbai, Maharashtra",
    "type": "Government",
    "zip": "400098",
    "link": "https://mu.ac.in/"
  },
  {
    "id": 5,
    "name": "University of Calcutta",
    "abbreviation": "CU",
    "location": "Kolkata, West Bengal",
    "type": "Government",
    "zip": "700073",
    "link": "https://www.caluniv.ac.in/"
  },
  {
    "id": 6,
    "name": "Anna University",
    "abbreviation": "AU",
    "location": "Chennai, Tamil Nadu",
    "type": "Government",
    "zip": "600025",
    "link": "https://www.annauniv.edu/"
  },
  {
    "id": 7,
    "name": "Osmania University",
    "abbreviation": "OU",
    "location": "Hyderabad, Telangana",
    "type": "Government",
    "zip": "500007",
    "link": "https://www.osmania.ac.in/"
  },
  {
    "id": 8,
    "name": "Aligarh Muslim University",
    "abbreviation": "AMU",
    "location": "Aligarh, Uttar Pradesh",
    "type": "Government",
    "zip": "202002",
    "link": "https://www.amu.ac.in/"
  },
  {
    "id": 9,
    "name": "Jadavpur University",
    "abbreviation": "JU",
    "location": "Kolkata, West Bengal",
    "type": "Government",
    "zip": "700032",
    "link": "https://www.jaduniv.edu.in/"
  },
  {
    "id": 10,
    "name": "University of Hyderabad",
    "abbreviation": "UoH",
    "location": "Hyderabad, Telangana",
    "type": "Government",
    "zip": "500046",
    "link": "https://uohyd.ac.in/"
  },
  {
    "id": 11,
    "name": "Punjab University",
    "abbreviation": "PU",
    "location": "Chandigarh",
    "type": "Government",
    "zip": "160014",
    "link": "https://puchd.ac.in/"
  },
  {
    "id": 12,
    "name": "University of Madras",
    "abbreviation": "UoM",
    "location": "Chennai, Tamil Nadu",
    "type": "Government",
    "zip": "600005",
    "link": "https://www.unom.ac.in/"
  },
  {
    "id": 13,
    "name": "Guru Nanak Dev University",
    "abbreviation": "GNDU",
    "location": "Amritsar, Punjab",
    "type": "Government",
    "zip": "143005",
    "link": "https://www.gndu.ac.in/"
  },
  {
    "id": 14,
    "name": "Savitribai Phule Pune University",
    "abbreviation": "SPPU",
    "location": "Pune, Maharashtra",
    "type": "Government",
    "zip": "411007",
    "link": "https://www.unipune.ac.in/"
  },
  {
    "id": 15,
    "name": "Andhra University",
    "abbreviation": "AU",
    "location": "Visakhapatnam, Andhra Pradesh",
    "type": "Government",
    "zip": "530003",
    "link": "https://www.andhrauniversity.edu.in/"
  },
  {
    "id": 16,
    "name": "University of Rajasthan",
    "abbreviation": "UoR",
    "location": "Jaipur, Rajasthan",
    "type": "Government",
    "zip": "302004",
    "link": "https://www.uniraj.ac.in/"
  },
  {
    "id": 17,
    "name": "Panjab University",
    "abbreviation": "PU",
    "location": "Chandigarh",
    "type": "Government",
    "zip": "160014",
    "link": "https://puchd.ac.in/"
  },
  {
    "id": 18,
    "name": "Gauhati University",
    "abbreviation": "GU",
    "location": "Guwahati, Assam",
    "type": "Government",
    "zip": "781014",
    "link": "https://www.gauhati.ac.in/"
  },
  {
    "id": 19,
    "name": "University of Kerala",
    "abbreviation": "UoK",
    "location": "Thiruvananthapuram, Kerala",
    "type": "Government",
    "zip": "695034",
    "link": "https://www.keralauniversity.ac.in/"
  },
  {
    "id": 20,
    "name": "Madurai Kamaraj University",
    "abbreviation": "MKU",
    "location": "Madurai, Tamil Nadu",
    "type": "Government",
    "zip": "625021",
    "link": "https://www.mkuniversity.ac.in/"
  },
  {
    "id": 21,
    "name": "University of Mysore",
    "abbreviation": "UoM",
    "location": "Mysore, Karnataka",
    "type": "Government",
    "zip": "570005",
    "link": "https://uni-mysore.ac.in/"
  },
  {
    "id": 22,
    "name": "Kurukshetra University",
    "abbreviation": "KU",
    "location": "Kurukshetra, Haryana",
    "type": "Government",
    "zip": "136119",
    "link": "https://www.kuk.ac.in/"
  },
  {
    "id": 23,
    "name": "Jamia Millia Islamia",
    "abbreviation": "JMI",
    "location": "New Delhi, Delhi",
    "type": "Government",
    "zip": "110025",
    "link": "https://www.jmi.ac.in/"
  },
  {
    "id": 24,
    "name": "Tezpur University",
    "abbreviation": "TU",
    "location": "Tezpur, Assam",
    "type": "Government",
    "zip": "784028",
    "link": "https://www.tezu.ernet.in/"
  },
  {
    "id": 25,
    "name": "Pondicherry University",
    "abbreviation": "PU",
    "location": "Puducherry",
    "type": "Government",
    "zip": "605014",
    "link": "https://www.pondiuni.edu.in/"
  },
  {
    "id": 26,
    "name": "North-Eastern Hill University",
    "abbreviation": "NEHU",
    "location": "Shillong, Meghalaya",
    "type": "Government",
    "zip": "793022",
    "link": "https://www.nehu.ac.in/"
  },
  {
    "id": 27,
    "name": "Visva-Bharati University",
    "abbreviation": "VBU",
    "location": "Santiniketan, West Bengal",
    "type": "Government",
    "zip": "731235",
    "link": "https://www.visvabharati.ac.in/"
  },
  {
    "id": 28,
    "name": "Sri Venkateswara University",
    "abbreviation": "SVU",
    "location": "Tirupati, Andhra Pradesh",
    "type": "Government",
    "zip": "517502",
    "link": "https://www.svuniversity.edu.in/"
  },
  {
    "id": 29,
    "name": "Bharathiar University",
    "abbreviation": "BU",
    "location": "Coimbatore, Tamil Nadu",
    "type": "Government",
    "zip": "641046",
    "link": "https://www.b-u.ac.in/"
  },
  {
    "id": 30,
    "name": "Kakatiya University",
    "abbreviation": "KU",
    "location": "Warangal, Telangana",
    "type": "Government",
    "zip": "506009",
    "link": "https://www.kakatiya.ac.in/"
  },
  {
    "id": 31,
    "name": "Mahatma Gandhi University",
    "abbreviation": "MGU",
    "location": "Kottayam, Kerala",
    "type": "Government",
    "zip": "686560",
    "link": "https://www.mgu.ac.in/"
  },
  {
    "id": 32,
    "name": "Calicut University",
    "abbreviation": "CU",
    "location": "Malappuram, Kerala",
    "type": "Government",
    "zip": "673635",
    "link": "https://www.uoc.ac.in/"
  },
  {
    "id": 33,
    "name": "Gujarat University",
    "abbreviation": "GU",
    "location": "Ahmedabad, Gujarat",
    "type": "Government",
    "zip": "380009",
    "link": "https://www.gujaratuniversity.ac.in/"
  },
  {
    "id": 34,
    "name": "Karnataka University",
    "abbreviation": "KU",
    "location": "Dharwad, Karnataka",
    "type": "Government",
    "zip": "580003",
    "link": "https://kud.ac.in/"
  },
  {
    "id": 35,
    "name": "Goa University",
    "abbreviation": "GU",
    "location": "Goa",
    "type": "Government",
    "zip": "403206",
    "link": "https://www.unigoa.ac.in/"
  },
  {
    "id": 36,
    "name": "Mizoram University",
    "abbreviation": "MZU",
    "location": "Aizawl, Mizoram",
    "type": "Government",
    "zip": "796004",
    "link": "https://mzu.edu.in/"
  },
  {
    "id": 37,
    "name": "Nagaland University",
    "abbreviation": "NU",
    "location": "Kohima, Nagaland",
    "type": "Government",
    "zip": "797001",
    "link": "https://www.nagalanduniversity.ac.in/"
  },
  {
    "id": 38,
    "name": "Manipur University",
    "abbreviation": "MU",
    "location": "Imphal, Manipur",
    "type": "Government",
    "zip": "795003",
    "link": "https://www.manipuruniv.ac.in/"
  },
  {
    "id": 39,
    "name": "Tripura University",
    "abbreviation": "TU",
    "location": "Agartala, Tripura",
    "type": "Government",
    "zip": "799022",
    "link": "https://www.tripurauniv.in/"
  },
  {
    "id": 40,
    "name": "Sikkim University",
    "abbreviation": "SU",
    "location": "Gangtok, Sikkim",
    "type": "Government",
    "zip": "737102",
    "link": "https://www.cus.ac.in/"
  },
  {
    "id": 41,
    "name": "Central University of Rajasthan",
    "abbreviation": "CURAJ",
    "location": "Ajmer, Rajasthan",
    "type": "Government",
    "zip": "305817",
    "link": "https://www.curaj.ac.in/"
  },
  {
    "id": 42,
    "name": "Central University of Gujarat",
    "abbreviation": "CUG",
    "location": "Gandhinagar, Gujarat",
    "type": "Government",
    "zip": "382030",
    "link": "https://www.cug.ac.in/"
  },
  {
    "id": 43,
    "name": "Central University of Haryana",
    "abbreviation": "CUH",
    "location": "Mahendragarh, Haryana",
    "type": "Government",
    "zip": "123029",
    "link": "https://www.cuh.ac.in/"
  },
  {
    "id": 44,
    "name": "Central University of Jammu",
    "abbreviation": "CUJ",
    "location": "Jammu, Jammu and Kashmir",
    "type": "Government",
    "zip": "181143",
    "link": "https://www.cujammu.ac.in/"
  },
  {
    "id": 45,
    "name": "Central University of Jharkhand",
    "abbreviation": "CUJ",
    "location": "Ranchi, Jharkhand",
    "type": "Government",
    "zip": "835205",
    "link": "https://www.cuj.ac.in/"
  },
  {
    "id": 46,
    "name": "Central University of Karnataka",
    "abbreviation": "CUK",
    "location": "Gulbarga, Karnataka",
    "type": "Government",
    "zip": "585367",
    "link": "https://www.cuk.ac.in/"
  },
  {
    "id": 47,
    "name": "Central University of Kerala",
    "abbreviation": "CUK",
    "location": "Kasaragod, Kerala",
    "type": "Government",
    "zip": "671316",
    "link": "https://www.cukerala.ac.in/"
  },
  {
    "id": 48,
    "name": "Central University of Odisha",
    "abbreviation": "CUO",
    "location": "Koraput, Odisha",
    "type": "Government",
    "zip": "764021",
    "link": "https://www.cuo.ac.in/"
  },
  {
    "id": 49,
    "name": "Central University of Punjab",
    "abbreviation": "CUP",
    "location": "Bathinda, Punjab",
    "type": "Government",
    "zip": "151001",
    "link": "https://www.cup.edu.in/"
  },
  {
    "id": 50,
    "name": "Central University of Tamil Nadu",
    "abbreviation": "CUTN",
    "location": "Thiruvarur, Tamil Nadu",
    "type": "Government",
    "zip": "610005",
    "link": "https://www.cutn.ac.in/"
  },
  {
    "id": 51,
    "name": "Central University of South Bihar",
    "abbreviation": "CUSB",
    "location": "Gaya, Bihar",
    "type": "Government",
    "zip": "824236",
    "link": "https://www.cusb.ac.in/"
  },
  {
    "id": 52,
    "name": "Central University of Kashmir",
    "abbreviation": "CUK",
    "location": "Srinagar, Jammu and Kashmir",
    "type": "Government",
    "zip": "190015",
    "link": "https://www.cukashmir.ac.in/"
  },
  {
    "id": 53,
    "name": "Central University of Himachal Pradesh",
    "abbreviation": "CUHP",
    "location": "Dharamshala, Himachal Pradesh",
    "type": "Government",
    "zip": "176215",
    "link": "https://www.cuhimachal.ac.in/"
  },
  {
    "id": 54,
    "name": "Central University of Andhra Pradesh",
    "abbreviation": "CUAP",
    "location": "Anantapur, Andhra Pradesh",
    "type": "Government",
    "zip": "515002",
    "link": "https://www.cuap.ac.in/"
  }
]
const stateU = [
  {
    "id": 1,
    "name": "University of Mumbai",
    "abbreviation": "MU",
    "location": "Mumbai, Maharashtra",
    "type": "State",
    "zip": "400098",
    "link": "https://mu.ac.in/"
  },
  {
    "id": 2,
    "name": "University of Calcutta",
    "abbreviation": "CU",
    "location": "Kolkata, West Bengal",
    "type": "State",
    "zip": "700073",
    "link": "https://www.caluniv.ac.in/"
  },
  {
    "id": 3,
    "name": "University of Madras",
    "abbreviation": "UoM",
    "location": "Chennai, Tamil Nadu",
    "type": "State",
    "zip": "600005",
    "link": "https://www.unom.ac.in/"
  },
  {
    "id": 4,
    "name": "University of Rajasthan",
    "abbreviation": "UoR",
    "location": "Jaipur, Rajasthan",
    "type": "State",
    "zip": "302004",
    "link": "https://www.uniraj.ac.in/"
  },
  {
    "id": 5,
    "name": "Gauhati University",
    "abbreviation": "GU",
    "location": "Guwahati, Assam",
    "type": "State",
    "zip": "781014",
    "link": "https://www.gauhati.ac.in/"
  },
  {
    "id": 6,
    "name": "University of Kerala",
    "abbreviation": "UoK",
    "location": "Thiruvananthapuram, Kerala",
    "type": "State",
    "zip": "695034",
    "link": "https://www.keralauniversity.ac.in/"
  },
  {
    "id": 7,
    "name": "Madurai Kamaraj University",
    "abbreviation": "MKU",
    "location": "Madurai, Tamil Nadu",
    "type": "State",
    "zip": "625021",
    "link": "https://www.mkuniversity.ac.in/"
  },
  {
    "id": 8,
    "name": "University of Mysore",
    "abbreviation": "UoM",
    "location": "Mysore, Karnataka",
    "type": "State",
    "zip": "570005",
    "link": "https://uni-mysore.ac.in/"
  },
  {
    "id": 9,
    "name": "Kurukshetra University",
    "abbreviation": "KU",
    "location": "Kurukshetra, Haryana",
    "type": "State",
    "zip": "136119",
    "link": "https://www.kuk.ac.in/"
  },
  {
    "id": 10,
    "name": "Guru Nanak Dev University",
    "abbreviation": "GNDU",
    "location": "Amritsar, Punjab",
    "type": "State",
    "zip": "143005",
    "link": "https://www.gndu.ac.in/"
  },
  {
    "id": 11,
    "name": "Andhra University",
    "abbreviation": "AU",
    "location": "Visakhapatnam, Andhra Pradesh",
    "type": "State",
    "zip": "530003",
    "link": "https://www.andhrauniversity.edu.in/"
  },
  {
    "id": 12,
    "name": "Osmania University",
    "abbreviation": "OU",
    "location": "Hyderabad, Telangana",
    "type": "State",
    "zip": "500007",
    "link": "https://www.osmania.ac.in/"
  },
  {
    "id": 13,
    "name": "Mahatma Gandhi University",
    "abbreviation": "MGU",
    "location": "Kottayam, Kerala",
    "type": "State",
    "zip": "686560",
    "link": "https://www.mgu.ac.in/"
  },
  {
    "id": 14,
    "name": "Calicut University",
    "abbreviation": "CU",
    "location": "Malappuram, Kerala",
    "type": "State",
    "zip": "673635",
    "link": "https://www.uoc.ac.in/"
  },
  {
    "id": 15,
    "name": "Gujarat University",
    "abbreviation": "GU",
    "location": "Ahmedabad, Gujarat",
    "type": "State",
    "zip": "380009",
    "link": "https://www.gujaratuniversity.ac.in/"
  },
  {
    "id": 16,
    "name": "Karnataka University",
    "abbreviation": "KU",
    "location": "Dharwad, Karnataka",
    "type": "State",
    "zip": "580003",
    "link": "https://kud.ac.in/"
  },
  {
    "id": 17,
    "name": "Goa University",
    "abbreviation": "GU",
    "location": "Goa",
    "type": "State",
    "zip": "403206",
    "link": "https://www.unigoa.ac.in/"
  },
  {
    "id": 18,
    "name": "Mizoram University",
    "abbreviation": "MZU",
    "location": "Aizawl, Mizoram",
    "type": "State",
    "zip": "796004",
    "link": "https://mzu.edu.in/"
  },
  {
    "id": 19,
    "name": "Nagaland University",
    "abbreviation": "NU",
    "location": "Kohima, Nagaland",
    "type": "State",
    "zip": "797001",
    "link": "https://www.nagalanduniversity.ac.in/"
  },
  {
    "id": 20,
    "name": "Manipur University",
    "abbreviation": "MU",
    "location": "Imphal, Manipur",
    "type": "State",
    "zip": "795003",
    "link": "https://www.manipuruniv.ac.in/"
  },
  {
    "id": 21,
    "name": "Tripura University",
    "abbreviation": "TU",
    "location": "Agartala, Tripura",
    "type": "State",
    "zip": "799022",
    "link": "https://www.tripurauniv.in/"
  },
  {
    "id": 22,
    "name": "Sikkim University",
    "abbreviation": "SU",
    "location": "Gangtok, Sikkim",
    "type": "State",
    "zip": "737102",
    "link": "https://www.cus.ac.in/"
  },
  {
    "id": 23,
    "name": "Panjab University",
    "abbreviation": "PU",
    "location": "Chandigarh",
    "type": "State",
    "zip": "160014",
    "link": "https://puchd.ac.in/"
  },
  {
    "id": 24,
    "name": "Jadavpur University",
    "abbreviation": "JU",
    "location": "Kolkata, West Bengal",
    "type": "State",
    "zip": "700032",
    "link": "https://www.jaduniv.edu.in/"
  },
  {
    "id": 25,
    "name": "Savitribai Phule Pune University",
    "abbreviation": "SPPU",
    "location": "Pune, Maharashtra",
    "type": "State",
    "zip": "411007",
    "link": "https://www.unipune.ac.in/"
  },
  {
    "id": 26,
    "name": "Bharathiar University",
    "abbreviation": "BU",
    "location": "Coimbatore, Tamil Nadu",
    "type": "State",
    "zip": "641046",
    "link": "https://www.b-u.ac.in/"
  },
  {
    "id": 27,
    "name": "Kakatiya University",
    "abbreviation": "KU",
    "location": "Warangal, Telangana",
    "type": "State",
    "zip": "506009",
    "link": "https://www.kakatiya.ac.in/"
  },
  {
    "id": 28,
    "name": "Sri Venkateswara University",
    "abbreviation": "SVU",
    "location": "Tirupati, Andhra Pradesh",
    "type": "State",
    "zip": "517502",
    "link": "https://www.svuniversity.edu.in/"
  },
  {
    "id": 29,
    "name": "North-Eastern Hill University",
    "abbreviation": "NEHU",
    "location": "Shillong, Meghalaya",
    "type": "State",
    "zip": "793022",
    "link": "https://www.nehu.ac.in/"
  },
  {
    "id": 30,
    "name": "Tezpur University",
    "abbreviation": "TU",
    "location": "Tezpur, Assam",
    "type": "State",
    "zip": "784028",
    "link": "https://www.tezu.ernet.in/"
  },
  {
    "id": 31,
    "name": "Pondicherry University",
    "abbreviation": "PU",
    "location": "Puducherry",
    "type": "State",
    "zip": "605014",
    "link": "https://www.pondiuni.edu.in/"
  },
  {
    "id": 32,
    "name": "Visva-Bharati University",
    "abbreviation": "VBU",
    "location": "Santiniketan, West Bengal",
    "type": "State",
    "zip": "731235",
    "link": "https://www.visvabharati.ac.in/"
  },
  {
    "id": 33,
    "name": "University of Jammu",
    "abbreviation": "JU",
    "location": "Jammu, Jammu and Kashmir",
    "type": "State",
    "zip": "180006",
    "link": "https://www.jammuuniversity.ac.in/"
  },
  {
    "id": 34,
    "name": "University of Kashmir",
    "abbreviation": "KU",
    "location": "Srinagar, Jammu and Kashmir",
    "type": "State",
    "zip": "190006",
    "link": "https://www.kashmiruniversity.net/"
  },
  {
    "id": 35,
    "name": "Hemwati Nandan Bahuguna Garhwal University",
    "abbreviation": "HNBGU",
    "location": "Srinagar, Uttarakhand",
    "type": "State",
    "zip": "246174",
    "link": "https://www.hnbgu.ac.in/"
  },
  {
    "id": 36,
    "name": "Kuvempu University",
    "abbreviation": "KU",
    "location": "Shimoga, Karnataka",
    "type": "State",
    "zip": "577451",
    "link": "https://www.kuvempu.ac.in/"
  },
  {
    "id": 37,
    "name": "Shivaji University",
    "abbreviation": "SU",
    "location": "Kolhapur, Maharashtra",
    "type": "State",
    "zip": "416004",
    "link": "https://www.unishivaji.ac.in/"
  },
  {
    "id": 38,
    "name": "Dr. Babasaheb Ambedkar Marathwada University",
    "abbreviation": "BAMU",
    "location": "Aurangabad, Maharashtra",
    "type": "State",
    "zip": "431004",
    "link": "https://www.bamu.ac.in/"
  },
  {
    "id": 39,
    "name": "Rashtrasant Tukadoji Maharaj Nagpur University",
    "abbreviation": "RTMNU",
    "location": "Nagpur, Maharashtra",
    "type": "State",
    "zip": "440001",
    "link": "https://www.nagpuruniversity.ac.in/"
  },
  {
    "id": 40,
    "name": "Chhatrapati Shahu Ji Maharaj University",
    "abbreviation": "CSJMU",
    "location": "Kanpur, Uttar Pradesh",
    "type": "State",
    "zip": "208024",
    "link": "https://www.kanpuruniversity.org/"
  }
]
app.get('/state',(req,res)=>{
  res.send(stateU);
})
app.get('/central',(req,res)=>{
  res.send(CentralU);

})
const PORT = 4000
app.listen(PORT,()=>{
  console.log(`app is listen on ${PORT}`)
})