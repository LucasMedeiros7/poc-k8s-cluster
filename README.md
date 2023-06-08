# poc-k8s-cluster 
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

This is a sample project that demonstrates how to deploy a Node.js application with the Express to a Kubernetes cluster using Minikube. The project contains a simple endpoint that returns the message "Hello, Node!!!" at the "/".

## Prerequisites ✅

Before getting started, make sure you have the following tools installed on your machine:

- Minikube: [Installation Instructions](https://minikube.sigs.k8s.io/docs/start/)
- kubectl: [Installation Instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Installation and Deployment ⚙️ 
 
Follow the steps below to install and deploy the application on Minikube:
1. Start the Minikube cluster:

   ```bash
   minikube start
   ```

2. Verify that the cluster is running:

   ```bash
   kubectl get nodes
   ```

3. Deploy the Pod by running the following command:

   ```bash
   kubectl apply -f k8s/pod.yaml
   ```

4. Wait for the Pod to start and be in a running state. Check the status by running:

   ```bash
   kubectl get pods
   ```

5. Deploy the Service by running the following command:

   ```bash
   minikube service nodehello --url
   ```

     Make a note of the URL displayed. </br>
 
 6. Access the application in your browser using the URL obtained in the previous step. You should see the message "Hello, Node!!!" displayed.

## Cleaning Up 🧹

After you have finished testing the application, you can clean up the project by following these steps:

1. Delete the Service and the Pod:

   ```bash
   kubectl delete -f k8s/pod.yaml
   ```

2. Stop the Minikube cluster:

   ```bash
   minikube stop
   minikube delete
   ```
