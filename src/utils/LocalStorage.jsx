
const emp = [
  {
    "id": "1",
    "email": "employee1@example.com",
    "password": "password1",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Prepare sales report",
        "task_description": "Gather data and compile a comprehensive sales report for Q3 2024.",
        "task_date": "2024-11-10",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Contact potential clients",
        "task_description": "Reach out to leads and schedule introductory calls.",
        "task_date": "2024-11-11",
        "category": "Business Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Update customer database",
        "task_description": "Ensure all customer information is accurate and up-to-date.",
        "task_date": "2024-11-01",
        "category": "Data Management"
      }
    ]
  },
  {
    "id": "2",
    "email": "employee2@example.com",
    "password": "password2",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Design marketing materials",
        "task_description": "Create visually appealing brochures and flyers for upcoming promotions.",
        "task_date": "2024-11-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task_title": "Launch social media campaign",
        "task_description": "Develop and execute a social media strategy to increase brand awareness.",
        "task_date": "2024-11-05",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Analyze website traffic",
        "task_description": "Use analytics tools to track website performance and identify areas for improvement.",
        "task_date": "2024-11-18",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Write blog content",
        "task_description": "Create engaging and informative blog posts related to industry trends.",
        "task_date": "2024-11-22",
        "category": "Content Creation"
      }
    ]
  },
  {
    "id": "3",
    "email": "employee3@example.com",
    "password": "password3",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Develop new product features",
        "task_description": "Collaborate with the engineering team to implement new functionalities.",
        "task_date": "2024-11-25",
        "category": "Product Development"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "task_title": "Fix bugs and issues",
        "task_description": "Address and resolve reported bugs and improve software stability.",
        "task_date": "2024-11-28",
        "category": "Software Engineering"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Conduct code reviews",
        "task_description": "Review code changes to ensure quality and adherence to standards.",
        "task_date": "2024-11-07",
        "category": "Software Engineering"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Refactor codebase",
        "task_description": "Improve code structure and maintainability.",
        "task_date": "2024-11-20",
        "category": "Software Engineering"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "task_title": "Write unit tests",
        "task_description": "Develop comprehensive unit tests to ensure code functionality.",
        "task_date": "2024-11-29",
        "category": "Software Engineering"
      }
    ]
  },
  {
    "id": "4",
    "email": "employee4@example.com",
    "password": "password4",
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "task_title": "Provide customer support",
        "task_description": "Respond to customer inquiries and resolve issues.",
        "task_date": "2024-11-12",
        "category": "Customer Support"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "task_title": "Process customer orders",
        "task_description": "Ensure timely and accurate processing of customer orders.",
        "task_date": "2024-11-04",
        "category": "Customer Support"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "task_title": "Handle customer complaints",
        "task_description": "Address and resolve customer complaints in a professional manner.",
        "task_date": "2024-11-17",
        "category": "Customer Support"
      }
    ]
  },
  {
    "id": "5",
    "email": "employee5@example.com",
    "password": "password5",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Manage project timelines",
        "task_description": "Track project progress and ensure deadlines are met.",
        "task_date": "2024-11-21",
        "category": "Project Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Allocate project resources",
        "task_description": "Effectively allocate resources to maximize project efficiency.",
        "task_date": "2024-11-23",
        "category": "Project Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task_title": "Conduct project risk assessments",
        "task_description": "Identify and evaluate potential project risks.",
        "task_date": "2024-11-09",
        "category": "Project Management"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Communicate project updates",
        "task_description": "Provide regular updates to stakeholders on project progress and any issues.",
        "task_date": "2024-11-26",
        "category": "Project Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Document project requirements",
        "task_description": "Clearly define and document project requirements.",
        "task_date": "2024-11-27",
        "category": "Project Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Facilitate team meetings",
        "task_description": "Organize and lead productive team meetings to discuss project progress and address any challenges.",
        "task_date": "2024-11-28",
        "category": "Project Management"
      }
    ]
  }
];


  const admin =  [{
    "id": "admin1",
    "email": "admin@example.com",
    "password": "adminpassword" 
  }]

  export const setLocalStorage = ()=> {
    localStorage.setItem('emp', JSON.stringify(emp));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  export const getLocalStorage = ()=> {
    const empData = localStorage.getItem('emp');
    const adminData = localStorage.getItem('admin');

   
    return { 
      emp: JSON.parse(empData), admin: JSON.parse(adminData) };
      
  }

