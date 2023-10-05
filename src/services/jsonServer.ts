export default class JsonServer {
    private static url = "http://localhost:3002/ResearchCenter";              // http://localhost:3002/ResearchCenter



/**
 *  creer un nouveau centerReacher    
 * @param centerReacher 
 * @returns   
 * @example http://localhost:3002/ResearchCenter     
 */
    static async ResearchCentersSelect() {
        return fetch(JsonServer.url)
          .then((response) => {
            return response.json();
          })
          .then((ResearchCenter) => {
            return ResearchCenter;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ResearchCenterSelect : ` + error);
          });
      }


      static async ResearchCenterSelect(centerReacher_id: string) {
        return fetch(`${JsonServer.url}/${centerReacher_id}`)
          .then((response) => {
            return response.json();
          })
          .then((centerReacher) => {
            return centerReacher;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ResearchCenterSelect : ` + error);
          });
      }
    }