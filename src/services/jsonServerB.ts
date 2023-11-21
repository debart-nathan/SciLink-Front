export default class JsonServerB {
    private static url = "https://localhost:8000";

    static async EntitySelectAll(entityName: string) : Promise<Array<any>> {
        return fetch(`${JsonServerB.url}/${entityName}`)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            return response;
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
          .then((response) => {
            return response;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
          });
        
      }

      static async EntitySelect(entityName: string,id: string) : Promise<any> {
        return fetch(`${JsonServerB.url}/${entityName}/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            return response;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
          });
        
      }

      static async EntityUpdate(entityName: string,id: string, data: any) {
        return fetch(`${JsonServerB.url}/${entityName}/${id}/patch`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            return response;
          })
          .catch((error) => {
            console.error(`Erreur attrapée dans ${entityName}Update : ` + error);
          });
      }

    }