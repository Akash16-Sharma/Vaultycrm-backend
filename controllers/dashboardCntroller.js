const Client = require("../models/Client");
const Project = require("../models/Project");
const Task = require("../models/Task");

exports.getDashBordStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const [client, project, task] = await Promise.all([
      Client.countDocuments({ user: userId }),
      Project.countDocuments({ createdBy: userId }),
      Task.countDocuments({ createdBy: userId }),
    ]);

    const completedTask = await Task.countDocuments({
      createdBy: userId,
      status: "Done",
    });

    const completedProject = await Project.countDocuments({
      createdBy: userId,
      status: "Completed",
    });

    res.json({
      totalClients: client,
      totalProjects: project,
      totalTasks: task,
      completedTask,
      completedProject,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching dashboard stats" });
  }
};
