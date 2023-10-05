export default class JsonServer {
    private static url = "http://localhost:3002/centerReachers";              // http://localhost:3002/centerReachers



/**
 *  creer un nouveau centerReacher    
 * @param centerReacher 
 * @returns   
 * @example http://localhost:3002/centerReachers     
 */
    static async centerReachersSelect() {
        return fetch(JsonServer.url)
          .then((response) => {
            return response.json();
          })
          .then((centerReachers) => {
            return centerReachers;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans centerReachersSelect : ` + error);
          });
      }

      
      static async centerReacherSelect(centerReacher_id: string) {
        return fetch(`${JsonServer.url}/${centerReacher_id}`)
          .then((response) => {
            return response.json();
          })
          .then((centerReacher) => {
            return centerReacher;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans centerReachersSelect : ` + error);
          });
      }
    }