$(document).ready(function() {
    const $searchInput = $('#search');
    const $results = $('#results');
    const $loading = $('.loading');

    $searchInput.on('input', function() {
        const query = $(this).val().trim();

        $loading.show();

        if(query === "") {
            $results.empty();
            $loading.hide();
            return;
        }

        $.ajax({
            url: `http://localhost:3001/products?q=${query}`,
            method: 'GET',
            success: function(data) {
                $loading.hide();
                $results.empty();

                if(data.length === 0) {
                    $results.html('<div class="no-result">No products found</div>');
                } else {
                    data.forEach(product => {
                        $results.append(`
                            <div class="product">
                                <img src="${product.image}" alt="${product.name}">
                                <div>
                                    <div><strong>${product.name}</strong></div>
                                    <div>Price: $${product.price}</div>
                                </div>
                            </div>
                        `);
                    });
                }
            },
            error: function() {
                $loading.hide();
                $results.html('<div class="no-result">Error fetching data</div>');
            }
        });
    });
});
