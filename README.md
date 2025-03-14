# leaflet-challenge

The repository will house the requirements for the GWU course assignment, Module 15.

Below are the details of the requirements and background of the challenge:

Leaflet Earthquake Visualization Challenge

🌍 Background

The United States Geological Survey (USGS) is a key organization responsible for providing scientific data about natural hazards, ecosystem health, environmental conditions, and the impacts of climate and land-use change. USGS scientists continually develop new methods and tools to deliver timely, relevant, and valuable insights about the Earth and its processes.

The USGS seeks to build tools that visualize earthquake data, collected globally in large volumes each day. However, they currently lack an effective way to present this data meaningfully.

In this challenge, you are tasked with developing a visualization tool to display USGS earthquake data. This tool will help educate the public and governmental organizations about seismic activity, raising awareness and potentially increasing funding for related projects.

🚀 Before You Begin 1. Create a New Repository • Name your new repository: leaflet-challenge. • This challenge should not be added to an existing repository. 2. Clone the Repository • Clone the newly created repository to your local machine. 3. Organize Your Files • Inside your local repository, create the following directories: • Leaflet-Part-1 • Leaflet-Part-2 • Add the necessary HTML and JavaScript files to each folder to ensure proper setup for the analysis. 4. Push to GitHub • Commit and push the initial file structure to GitHub.

📂 Files

Download the necessary files to get started: • Module 15 Challenge Files (Insert link here)

📋 Instructions

The challenge is divided into two parts:

Part 1: Earthquake Visualization

Objective:

Visualize earthquake data using Leaflet.

Steps: 1. Get the Dataset: • Visit the USGS GeoJSON Feed. • Select and download a dataset (e.g., “All Earthquakes from the Past 7 Days”). • Copy the dataset’s JSON URL for later use. 2. Create the Visualization: • Using Leaflet, plot all earthquakes based on their longitude and latitude. • Configure data markers: • Size reflects earthquake magnitude. • Color indicates earthquake depth. • Include popups with additional earthquake details (magnitude, location, depth) when markers are clicked. • Add a legend to explain the data markers’ size and color.

Part 2: Additional Data Visualization (Optional)

Challenge yourself by adding a second dataset to visualize tectonic plate boundaries alongside earthquake data.

Steps: • Download tectonic plate data from GitHub - Tectonic Plates Dataset. • Overlay the tectonic plate boundaries on your existing earthquake map. • Add multiple base maps and allow users to switch between datasets using layer controls. • Ensure the overlays for earthquake and tectonic plate data can be toggled independently.

🎯 Requirements

Part 1: Earthquake Visualization (Mandatory) • Map (60 points): • TileLayer loads without errors (20 pts) • GeoJSON API connects via D3 without errors (20 pts) • Earthquake markers scale with magnitude (10 pts) • Legend indicating depth and corresponding colors (10 pts) • Data Points (40 points): • Data points scale based on magnitude (10 pts) • Data points change color based on depth (10 pts) • Tooltips display magnitude, location, and depth (10 pts) • Data points load accurately at correct locations (10 pts)

Part 2: (Optional - No Extra Points) • Plot tectonic plates on the same map as earthquake data. • Add interactive base maps and layer controls.
