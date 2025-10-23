# Miai
First AI Agent - Miai with self-hosted n8n workflow
## To access the AI Agent, please visit - [www.mimnets.com](https://mimnets.com/miai/)
## I have describe the project in this article - 

# Best CPU-Optimized Models
## For Speed (Best for CPU):

Phi-3 Mini and wizardlm2:7b are leading options for raw velocity and responsiveness BytePlus
TinyLlama (1.1B) - ultra-lightweight, can run with just 2GB RAM and 1 CPU core Collabnix
Gemma 2 (2B) - excellent performance-to-size ratio Collabnix

## Balanced Performance (7B models):

Mistral 7B - good balance of speed and capability, performs better than LLaMA 2 13B on many tasks with CPU-friendly quantized versions Virtualization Howto
Llama 3.2 (7B) - solid general-purpose option

## Installation & Optimization
```
bash# Install fastest models
ollama pull phi3:mini
ollama pull tinyllama:1.1b
ollama pull gemma2:2b
ollama pull mistral:7b-q4_0
```

# Test performance
ollama run phi3:mini --verbose
CPU Performance Tips
For optimal CPU performance, look for processors with high clock speeds and multiple cores (8+), such as Intel Core i9 or AMD Ryzen 9, and aim for at least 16GB RAM Arsturn
## Key optimizations:
Use 4-bit quantization (q4_0) which reduces memory usage and speeds up performance Arsturn
Set CPU thread count: export OLLAMA_NUM_THREADS=8
Use smaller context windows: --context-size 2048
Always choose quantized models (q4_0, q4_1) for CPU

## Hardware Requirements
For 7B models with 4-bit quantization, you need 4-6GB RAM for decent development performance Collabnix
The key for CPU usage is choosing smaller, quantized models. While they won't match GPU speeds, these optimized models provide usable performance on CPU-only systems.

# Popular Uncensored Models (2025)
### Latest options:
```
bash# Dolphin series (popular uncensored variants)
ollama pull dolphin-mistral:7b
ollama pull dolphin-llama3:8b
```

# Wizard Vicuna (uncensored)
```
ollama pull wizard-vicuna-uncensored:7b
ollama pull wizard-vicuna-uncensored:13b
```

# Nous Hermes (less filtered)
ollama pull nous-hermes2:10.7b-solar-q4_K_M

# Orca2 (minimal filtering)
ollama pull orca2:7b

### For CPU efficiency, I'd recommend:
bashollama pull dolphin-mistral:7b
This is based on Mistral 7B (which you wanted) but with reduced safety filtering.

### Important Notes
"Uncensored" means reduced content filtering - these models will respond to more requests but may generate inappropriate, biased, or harmful content
They're primarily used for creative writing, roleplay, research, or scenarios where standard models are overly restrictive
You're responsible for how you use these models
Performance is similar to their base models

# Best Models for Technical/Engineering Work
## Top Recommendations:
bash# DeepSeek Coder (excellent for technical/engineering)
ollama pull deepseek-coder:6.7b

# Mistral (strong technical knowledge)
ollama pull mistral:7b

# Llama 3.1 (great general technical capability)
ollama pull llama3.1:8b

# CodeLlama (good for technical processes)
ollama pull codellama:7b

# Mixtral (more advanced, needs more RAM)
```
ollama pull mixtral:8x7b
For CPU-optimized performance, I recommend:
bashollama pull mistral:7b
```
# or
ollama pull deepseek-coder:6.7b

Why These Are Better for Your Needs
### These models are:
Not restricted on technical/engineering content
Better trained on scientific and manufacturing knowledge
More accurate for technical R&D questions
Standard models handle technical topics just fine - they only restrict harmful content, not engineering knowledge
