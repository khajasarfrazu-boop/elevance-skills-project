# EverShop E-Commerce Cloud Deployment
### Elevance Skills Training Project (9-Lesson Curriculum)

This repository contains the deployment configuration and core files for a production-ready EverShop e-commerce platform. This project was completed as part of the **Elevance Skills** training, focusing on full-stack deployment and AWS cloud infrastructure management.

## 🚀 Live Infrastructure
* **Website URL:** InternetFacing-lb-1837675839.ap-south-2.elb.amazonaws.com/Accessories
* Live proof :
<img width="1918" height="1010" alt="cloud front" src="https://github.com/user-attachments/assets/9b7940d5-f46b-4902-b919-58ef120f9c43" />
<img width="1911" height="1015" alt="Load Balancers" src="https://github.com/user-attachments/assets/014e2469-7592-4c63-b2c8-6130b3a9bac0" />
<img width="1912" height="1010" alt="Instances" src="https://github.com/user-attachments/assets/78d66f21-bc56-4674-b7e7-ab5c3c6712ac" />
<img width="1905" height="1023" alt="products" src="https://github.com/user-attachments/assets/0428b2a3-62c9-4908-bba8-5e58e590ffb8" />
<img width="1911" height="1027" alt="website" src="https://github.com/user-attachments/assets/8fcea380-80ce-4eba-803e-6f9916a82351" />

**Cost Optimization & Decommissioning Notice:**
> I successfully deployed the full infrastructure on AWS, which you can see in the 'Live Proof' section below. To manage cloud costs and follow best practices for resource cleanup, I decommissioned the active instances after documenting the successful deployment. However, the entire configuration and IaC (Infrastructure as Code) patterns are preserved here in the repository to demonstrate the architecture and deployment workflow.
* **Environment:** AWS (Amazon Web Services)
* **AWS Region:** ap-south-2 (Hyderabad)
* **Database:** PostgreSQL (v14+)

## 🏗️ Cloud Architecture & Key Features
Beyond the code, this project demonstrates advanced cloud engineering skills:

* **Compute:** Hosted on an **AWS EC2** instance running Ubuntu.
* **Memory Optimization:** Configured a **2GB Swap file** to ensure server stability during high-traffic simulations.
* **Load Balancing:** Implemented an **AWS Application Load Balancer (ALB)** with health checks to manage traffic and ensure high availability.
* **Global Delivery:** Integrated **AWS CloudFront** (CDN) for low-latency content delivery and SSL termination.
* **Security:** * Configured **IAM Users** with Multi-Factor Authentication (MFA).
    * Strict **Security Group** rules to restrict unauthorized port access.
* **Monitoring:** Conducted real-time health checks and status monitoring (HTTP 200 checks).

## 🛠️ Tech Stack
* **Frontend:** React, TailwindCSS
* **Backend:** Node.js, Express, GraphQL
* **Database:** PostgreSQL
* **Cloud:** AWS (EC2, ALB, CloudFront, IAM, Route53)

## 📚 What I Learned
Through the 9 lessons of Elevance Skills, I mastered:
1.  Deploying modular monolith architectures (EverShop).
2.  Managing Linux server environments via SSH.
3.  Troubleshooting network connectivity and server "unhealthy" states.
4.  Optimizing cloud resources for performance and cost.

---
*Created by Sarfaraz as part of the Elevance Skills Professional Portfolio.*
