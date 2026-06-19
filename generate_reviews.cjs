const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'reviews.ts');
let content = fs.readFileSync(file, 'utf-8');

const indianNames = [
  "Aarav Sharma", "Vivaan Gupta", "Aditya Singh", "Vihaan Patel", "Arjun Kumar", "Sai Krishna", "Riaan Reddy", "Ayaan Verma", "Krishna Rao", "Ishaan Joshi",
  "Shaurya Reddy", "Atharv Desai", "Kabir Menon", "Niharika Nair", "Aaradhya Das", "Ananya Iyer", "Diya Pillai", "Aadhya Kulkarni", "Navya Bhat", "Kavya Menon",
  "Pari Shah", "Kiara Shetty", "Pooja Hegde", "Saanvi Mehra", "Meera Chopra", "Prisha Jha", "Anushka Sharma", "Neha Kakkar", "Riya Sen", "Swati Reddy",
  "Rahul Dravid", "Ramesh Kumar", "Suresh Raina", "Dinesh Karthik", "Ravi Ashwin", "Rajat Patidar", "Manish Pandey", "Rohit Sharma", "Virat Kohli", "Shikhar Dhawan",
  "Ajinkya Rahane", "Cheteshwar Pujara", "Hardik Pandya", "Jasprit Bumrah", "Mohammed Shami", "Bhuvneshwar Kumar", "Rishabh Pant", "Ravindra Jadeja", "Kuldeep Yadav", "Yuzvendra Chahal",
  "Shreyas Iyer", "Sanju Samson", "Suryakumar Yadav", "Deepak Chahar", "Shardul Thakur", "Washington Sundar", "Navdeep Saini", "T Natarajan", "Prithvi Shaw", "Shubman Gill",
  "Mayank Agarwal", "KL Rahul", "Mohammed Siraj", "Axar Patel", "Umesh Yadav", "Ishant Sharma", "Varun Chakravarthy", "Rahul Chahar", "Krunal Pandya", "Harshal Patel",
  "Devdutt Padikkal", "Ruturaj Gaikwad", "Nitish Rana", "Venkatesh Iyer", "Avesh Khan", "Prasidh Krishna", "Chetan Sakariya", "Arshdeep Singh", "Ravi Bishnoi", "Deepak Hooda",
  "Shivam Dube", "Vijay Shankar", "Kedar Jadhav", "Ambati Rayudu", "MS Dhoni", "Virender Sehwag", "Gautam Gambhir", "Yuvraj Singh", "Zaheer Khan", "Harbhajan Singh",
  "Anil Kumble", "Rahul Bajaj", "Anand Mahindra", "Ratan Tata", "Mukesh Ambani", "Gautam Adani", "Azim Premji", "Shiv Nadar", "Lakshmi Mittal", "Kumar Mangalam Birla"
];

const comments = [
  "Very professional and timely service. Highly recommended!",
  "Excellent packing and moving. All my items arrived safely without any damage.",
  "Good service, polite staff and reasonable price.",
  "Manikanta Movers did a fantastic job shifting my house. Smooth process from start to finish.",
  "Very reliable. They kept their promise on delivery time and handled everything with care.",
  "The team was very cooperative and quick. Best movers in Vizag!",
  "Affordable pricing and top-notch service. Thank you Manikanta Packers and Movers.",
  "Hassle-free relocation. I didn't have to lift a finger.",
  "They used good quality packing materials. Not a single scratch on my furniture.",
  "Very responsive and helpful team. Made my move completely stress-free."
];

let newReviews = '';
for(let i = 13; i <= 100; i++) {
  const name = indianNames[Math.floor(Math.random() * indianNames.length)];
  const comment = comments[Math.floor(Math.random() * comments.length)];
  const date = Math.floor(Math.random() * 6) + 1 + " months ago";
  const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`;
  
  newReviews += `  {
    id: "r${i}",
    name: "${name}",
    avatar: "${avatar}",
    stars: 5,
    text: "${comment}",
    date: "${date}",
  },
`;
}

// remove the closing `];` and `\n` from the existing file
const targetStr = "];";
const insertPos = content.lastIndexOf(targetStr);
if (insertPos !== -1) {
  content = content.slice(0, insertPos) + newReviews + "];\n";
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Successfully added reviews.');
} else {
  console.error('Could not find closing bracket to insert reviews.');
}
