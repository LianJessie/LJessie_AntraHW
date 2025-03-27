const eventsAPI = (() => {
    const EVENT_API = "http://localhost:3000/events";

    // GET
    const getAll = async () => {
        const response = await fetch(EVENT_API);
        const events = await response.json();
        return events;
    };

    // POST
    const add = async (newEvent: Event) => {
        const res = await fetch(EVENT_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        });
    }

    // PUT
    const updateById = async (id) => {
        await fetch(`${EVENT_API}/${id}`, {
            method: "PUT",
        });
    };

    // PATCH
    const patchById = async (id) => {
        await fetch(`${EVENT_API}/${id}`, {
            method: "PATCH",
        });
    };


    // DELETE
    const deleteById = async (id) => {
        await fetch(`${EVENT_API}/${id}`, {
            method: "DELETE",
        });
    };

    return {
        getAll,
        add,
        deleteById
    };

})();