() => {
    cy.get("table").should("have.length", 5);
    cy.get("table").each(($a, i) => {
        if (i === 1) {  // Change the condition to strictly equal comparison
            cy.wrap($a).find("th").each(($d, j) => {  // Use cy.wrap to properly chain Cypress commands
                if (j === 0) {
                    cy.wrap($d).contains("Nested Table 2");
                } else if (j === 1) {
                    cy.wrap($d).contains("Column 1");
                } else if (j === 2) {
                    cy.wrap($d).contains("Column 2");
                }
            });
            // Uncomment the line below if you want to check the number of <td> elements within this table
            // cy.wrap($a).find("td").should("have.length", 2);
        }
    });
}