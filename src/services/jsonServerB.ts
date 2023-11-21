export default class JsonServerB {
  private static url = "https://localhost:8000";

  static async EntitySelectAll(entityName: string): Promise<Array<any>> {
      return fetch(`${JsonServerB.url}/${entityName}`, {
          credentials: 'include', // Include credentials (cookies)
      })
      .then((response) => {
          return response.json();
      })
      .then((response) => {
          return response;
      })
      .catch((error) => {
          console.error(
              `Erreur attrapée dans ${entityName}SelectAll : ` + error
          );
      });
  }

  static async EntitySelectWCondition(
      entityName: string,
      conditionName: string,
      condition: any
  ): Promise<Array<any>> {
      return fetch(
          `${JsonServerB.url}/${entityName}?${conditionName}=${condition}`, {
              credentials: 'include', // Include credentials (cookies)
          }
      )
      .then((response) => {
          return response.json();
      })
      .then((response) => {
          return response;
      })
      .catch((error) => {
          console.error(
              `Erreur attrapée dans ${entityName}Select : ` + error
          );
      });
  }

  static async EntitySelect(entityName: string, id: string): Promise<any> {
      return fetch(`${JsonServerB.url}/${entityName}/${id}`, {
          credentials: 'include', // Include credentials (cookies)
      })
      .then((response) => {
          return response.json();
      })
      .then((response) => {
          return response;
      })
      .catch((error) => {
          console.error(
              `Erreur attrapée dans ${entityName}Select : ` + error
          );
      });
  }

  static async PostRequest(endpoint: string, data: any): Promise<any> {
      return fetch(`${JsonServerB.url}/${endpoint}`, {
          method: "POST",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: 'include', // Include credentials (cookies)
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .catch((error) => {
          console.error("Error:", error);
      });
  }

  static async EntityUpdate(entityName: string, id: string, data: any) {
      return fetch(`${JsonServerB.url}/${entityName}/${id}/patch`, {
          method: "PATCH",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: 'include', // Include credentials (cookies)
      })
      .then((response) => {
          return response.json();
      })
      .then((response) => {
          return response;
      })
      .catch((error) => {
          console.error(
              `Erreur attrapée dans ${entityName}Update : ` + error
          );
      });
  }

  static async GetConnectedUser(): Promise<any> {
    return fetch(`${JsonServerB.url}/Users/connected`, {
        credentials: 'include', // Include credentials (cookies)
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        return response;
    })
    .catch((error) => {
        console.error("Error in GetConnectedUser: " + error);
    });
}

  private static async CheckCondition(
      condition: string,
      id: string = ""
  ): Promise<boolean> {
      const response = await fetch(
          `${JsonServerB.url}/${condition}${id ? `/${id}` : ""}`, {
              credentials: 'include', // Include credentials (cookies)
          }
      );
      return response.status === 200;
  }

  static async IsLoggedIn(): Promise<boolean> {
      return this.CheckCondition("is-logged-in");
  }

  static async IsAdmin(): Promise<boolean> {
      return this.CheckCondition("is-admin");
  }

  static async IsFriend(id: string): Promise<boolean> {
      return this.CheckCondition("is-friend", id);
  }

  static async IsConnectedUser(id: string): Promise<boolean> {
      return this.CheckCondition("is-connected-user", id);
  }
}