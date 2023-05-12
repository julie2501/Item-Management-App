@RestController
@RequestMapping("/api/items")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;
    
    @GetMapping
    public List<Item> getItems() {
        return itemRepository.findAll();
    }
    
    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }
    
    @GetMapping("/search")
    public List<Item> searchItems(@RequestParam("name") String name) {
        return itemRepository.findByNameContaining(name);
    }
}
