export default class JsonServerB {
    private static url = "http://localhost:3002";

    static async EntitySelectAll(entityName: string) : Promise<Array<any>> {
        return fetch(`${JsonServerB.url}/${entityName}`)
          .then((response) => {
            return response.json();
          })
          .then((ResearchCenter) => {
            return ResearchCenter;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ${entityName}SelectAll : ` + error);
          });
      }


      static async EntitySelectWCondition(entityName: string,conditionName: string, condition: any) : Promise<Array<any>> {
        return fetch(`${JsonServerB.url}/${entityName}?${conditionName}=${condition}`)
          .then((response) => {
            return response.json();
          })
          .then((ResearchCenter) => {
            return ResearchCenter;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
          });
        
      }

      static async EntitySelect(entityName: string,id: number) : Promise<any> {
        return fetch(`${JsonServerB.url}/${entityName}/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((ResearchCenter) => {
            return ResearchCenter;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
          });
        
      }
    }