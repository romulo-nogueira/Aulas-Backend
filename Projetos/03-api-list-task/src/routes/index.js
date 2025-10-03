import routesTask from "./taskRoutes.js";

 const routes = (app) => {
    app.route("/").get((req, res)=>{
        const mensage = "Bem-Vindo ao servidor da Task List.";
        res.status(200).send(mensage);
    })

    app.use(routesTask);
}

export default routes;
