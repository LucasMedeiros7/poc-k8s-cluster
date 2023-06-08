# poc-k8s-cluster 
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

This is a sample project that demonstrates how to deploy a Node.js application with the Express to a Kubernetes cluster using Minikube. The project contains a simple endpoint that returns the message "Hello, Node!!!" at the "/".

## Prerequisites ✅

Before getting started, make sure you have the following tools installed on your machine:

- Minikube: [Installation Instructions](https://minikube.sigs.k8s.io/docs/start/)
- kubectl: [Installation Instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Installation and Deployment ⚙️ 
 
Follow the steps below to install and deploy the application on Minikube:

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:lucasmedeiros7/poc-k8s-cluster.git
   ```

2. Navigate to the project directory:

   ```bash
   cd poc-k8s-cluster
   ```

3. Start the Minikube cluster:

   ```bash
   minikube start
   ```

4. Verify that the cluster is running:

   ```bash
   kubectl get nodes
   ```

5. Deploy the Pod by running the following command:

   ```bash
   kubectl apply -f k8s/pod.yaml
   ```

6. Wait for the Pod to start and be in a running state. Check the status by running:

   ```bash
   kubectl get pods
   ```

7. Deploy the Service by running the following command:

   ```bash
   kubectl apply -f k8s/service.yaml
   ```

8. Get the URL to access the application by running:

   ```bash
   minikube service nodehello --url
   ```

    Make a note of the URL displayed.

9. Access the application in your browser using the URL obtained in the previous step. You should see the message "Hello, Node!!!" displayed.

## Cleaning Up 🧹

After you have finished testing the application, you can clean up the project by following these steps:

1. Delete the Service and the Pod:

   ```bash
   kubectl delete -f k8s/service.yaml
   kubectl delete -f k8s/pod.yaml
   ```

2. Stop the Minikube cluster:

   ```bash
   minikube stop
   minikube delete
   ```