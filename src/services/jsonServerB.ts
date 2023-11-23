export default class JsonServerB {
    private static url = "https://localhost:8000";

    static async EntitySelectAll(entityName: string): Promise<Array<any>> {
        return fetch(`${JsonServerB.url}/${entityName}`, {
            credentials: "include", // Include credentials (cookies)
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
            `${JsonServerB.url}/${entityName}?${conditionName}=${condition}`,
            {
                credentials: "include", // Include credentials (cookies)
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
            credentials: "include", // Include credentials (cookies)
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
            credentials: "include", // Include credentials (cookies)
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
            credentials: "include", // Include credentials (cookies)
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
            credentials: "include", // Include credentials (cookies)
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
    ): Promise<Response> {
        const response = await fetch(
            `${JsonServerB.url}/${condition}${id ? `/${id}` : ""}`,
            {
                credentials: "include", // Include credentials (cookies)
            }
        );
        return response;
    }

    static async IsLoggedIn(): Promise<boolean> {
        const response = await this.CheckCondition("is-logged-in");
        const body = await response.json();
        return body.value;
    }
    
    static async IsAdmin(): Promise<boolean> {
        const response = await this.CheckCondition("is-admin");
        const body = await response.json();
        return body.value;
    }
    
    static async IsFriend(id: string): Promise<boolean> {
        const response = await this.CheckCondition("is-friend", id);
        const body = await response.json();
        return body.value;
    }
    
    static async IsConnectedUser(id: string): Promise<boolean> {
        const response = await this.CheckCondition("is-connected-user", id);
        const body = await response.json();
        return body.value;
    }
    
    static async IsConnectedUsers(ids: number[]): Promise<any> {
        const response = await this.PostRequest("is-connected-users", ids);
        const body = await response.json();
        return body.value;
    }
}
